const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

//@route  GET api/auth
//@access Public
router.get('/', auth, async (req, res) => {
    try{
        let user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        console.err(err.message);
        res.status(500).send("Server error");
    }
});

//@route  POST api/auth
//@access Public
//@desc   Authenticate user & get token
router.post('/', [
        check('email', "Пожалуйста, укажите ваш email").isEmail(),
        check('password', "Слишком короткий пароль. Минимальная длина 6 символов").isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const { email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({errors: [{msg: 'Неверные учетные данные'}]});
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({errors: [{msg: 'Неверные учетные данные'}]});
            }

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