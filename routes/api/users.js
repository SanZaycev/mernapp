const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');
//@route  POST api/users
//@access Public
//@desc   Register User
router.post('/', [
        check('name', "Как Вас зовут?").not().isEmpty(),
        check('email', "Пожалуйста, укажите ваш email").isEmail(),
        check('password', "Пароль может содержать 6 и более символов").isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if(user){
                return res.status(400).json({errors: [{msg: 'Пользователь существует. Войдите на сайт или укажите другой email'}]});
            }

            const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

            user = new User({
                name,
                email,
                avatar,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            // Return JWT
            jwt.sign(payload, config.get('jwtSecret'),
                {expiresIn: 360000},
                (err, token) => {
                    if (err) throw err;
                    res.json({token});
                }
            );
        } catch (err) {
            console.log(err.message);
            req.status(500).send("Server Error");
        }
    }
);

module.exports = router;
