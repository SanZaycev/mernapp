const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const fs = require('fs');
const settings = require('settings');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

//@route  GET api/profile/iam
//@access Public
//@desc   Get current user profile

router.get('/iam', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        if(!profile){
            return await res.status(400).json({ msg: 'Профиль отсутствует' });
        }

        await res.json(profile);
    } catch (err){
        console.err(err.message);
        await res.status(500).send('Server Error');
    }
});


//@route  POST api/profile
//@access Private
//@desc   Create/Update user profile

router.post('/', [
    auth, [
        check('status', 'Укажите Ваш статус').not().isEmpty(),
        check('skills', 'Какими навыками вы обладаете?').not().isEmpty(),
        check('profession', 'Укажите профессию').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        company,
        website,
        location,
        status,
        profession,
        skills,
        bio,
        banner,
        githubname,
        telegram,
        vk,
        linkedin,
        twitter,
        instagram,
        facebook,
        youtube,
    } = req.body;

    //Build profile object
    const profileFields = {};

    profileFields.user = req.user.id;
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(status) profileFields.status = status;
    if(profession) profileFields.profession = profession;
    if(bio) profileFields.bio = bio;
    if(banner) profileFields.banner = banner;
    if(githubname) profileFields.githubname = githubname;
    if(skills){ profileFields.skills = skills.split(',').map( skill => skill.trim()); }

    profileFields.social = {};
    if(telegram) profileFields.social.telegram = telegram;
    if(vk) profileFields.social.vk = vk;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(twitter) profileFields.social.twitter = twitter;
    if(instagram) profileFields.social.instagram = instagram;
    if(facebook) profileFields.social.facebook = facebook;
    if(youtube) profileFields.social.youtube = youtube;

    try{
        let profile = await Profile.findOne({ user: req.user.id });
        if(profile){
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return await res.json(profile);
        }

        //Create Profile
        profile = new Profile(profileFields);
        await profile.save();
        await res.json(profile);
    } catch(err) {
        console.error(err.message);
        await res.status(500).send('Server Error');
    }
  }
);


//@route  GET api/profile
//@access Public
//@desc   Get all profiles

router.get('/', async (req, res) => {
   try{
       const profiles = await Profile.find().populate('user', ['name', 'avatar']);
       await res.json(profiles);
   } catch (err) {
        console.error(err.message);
        await res.status(500).send('Server Error');
   }
});


//@route  GET api/profile/user/:user_id
//@access Public
//@desc   Get single profile

router.get('/user/:id', async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.params.id }).populate('user', ['name', 'avatar']);
        if(!profile){
            return res.status(400).json({ msg: "Профиль не найден" });
        }
        await res.json(profile);
    } catch (err){
        console.error(err.message);
        if(err.name === 'CastError'){
            return res.status(400).json({ msg: "Профиль не найден" });
        }
        res.status(500).send('Server Error');
    }
});


//@route  DELETE api/profile
//@access Private
//@desc   Delete profile

router.delete('/:user_id', auth, async (req, res) => {
    /*switch(req.params.user_id){
        case req.user.id: break;
        default: return await res.status(400).json({ msg: "Пользователь не найден" });
    }*/
    try{
        //Remove User Posts
        await Post.deleteMany({ user: req.user.id });
        //Remove Profile
        await Profile.findOneAndRemove({ user: req.user.id });
        //Remove User
        await User.findOneAndRemove({ _id: req.user.id });
        //Remove user avatar
        const userPath = `${settings.PROJECT_DIR}/client/public/uploads/${req.user.id}`;
        const rmDir = function(dirPath) {
            if (fs.existsSync(dirPath)){
                let files = fs.readdirSync(dirPath);
                if (files.length > 0)
                    for (let i = 0; i < files.length; i++) {
                        const filePath = dirPath + '/' + files[i];
                        if (fs.statSync(filePath).isFile()){ fs.unlinkSync(filePath); }
                        else { rmDir(filePath); }
                    }
                fs.rmdirSync(dirPath);
            }
        };
        rmDir(userPath);

        await res.json({ msg: "Пользователь был удалён" });
    } catch (err){
        console.error(err.message);
        await res.status(500).send('Server Error');
    }
});


//@route  PUT api/profile/experience
//@desc   Add profile experience
//@desc   private

router.put('/experience', [
        auth, [
            check('title', 'Укажите должность').not().isEmpty(),
            check('company', 'Необходимо указать название компании').not().isEmpty(),
            check('from', 'Укажите дату начала работы').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            title,
            company,
            location,
            from,
            to,
            current,
            description,
        } = req.body;

        const newExp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description,
        };

        try{
            const profile = await Profile.findOne({ user: req.user.id });
            profile.experience.unshift(newExp);
            await profile.save();
            await res.json(profile);
        } catch (err){
            console.error(err.message);
            await res.status(500).send('Server Error');
        }
    }
);


//@route  DELETE api/profile/experience/:exp_id
//@desc   Add profile experience
//@desc   private

router.delete('/experience/:exp_id', auth, async (req, res) => {
   try{
        const profile = await Profile.findOne({ user: req.user.id });
        //Get remove index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex,1);
        await profile.save();
        await res.json(profile);
   } catch (err){
       console.error(err.message);
       await res.status(500).send('Server Error');
   }
});


//@route  PUT api/profile/education
//@desc   Add profile eduaction
//@desc   private

router.put('/education', [
        auth, [
            check('school', 'Необходимо указать название учебного заведения').not().isEmpty(),
            check('degree', 'Укажите уровень образования').not().isEmpty(),
            check('fieldofstudy', 'Укажите специализацию').not().isEmpty(),
            check('from', 'Укажите дату начала обучения').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description,
        } = req.body;

        const newEducation = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description,
        };

        try{
            const profile = await Profile.findOne({ user: req.user.id });
            profile.education.unshift(newEducation);
            await profile.save();
            await res.json(profile);
        } catch (err){
            console.error(err.message);
            await res.status(500).send('Server Error');
        }
    }
);


//@route  DELETE api/profile/education/:ed_id
//@desc   Add profile education
//@desc   private

router.delete('/education/:ed_id', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id });
        //Get remove index
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.ed_id);
        profile.education.splice(removeIndex,1);
        await profile.save();
        await res.json(profile);
    } catch (err){
        console.error(err.message);
        await res.status(500).send('Server Error');
    }
});


//@route  DELETE api/profile/github/:username
//@desc   Get user repos from Github
//@desc   Public

router.get('/github/:username', async (req, res) => {
   try{
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${(config.get('githubSecret'))}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };

        request(options, (error, response, body) => {
             if(error) console(error);
             if(response.statusCode !== 200){
                 return res.status(404).json({ msg: 'Профиль Github не найден' });
             }
             res.json(JSON.parse(body));
        });

   } catch (err){
        console.error(err.message);
        await req.status(500).send('Server Error');
   }
});

module.exports = router;