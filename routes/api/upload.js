const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const fs = require('fs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const settings = require('settings');
const translit = require('../../middleware/translit');
const User = require('../../models/User');

router.use(fileUpload());
router.use(express.static("public"));
router.use(bodyParser.urlencoded({limit: '1mb', extended: true}));

//@route  PUT api/upload
//@access Private
//@desc   Upload user avatar
router.put('/', auth, async (req, res) => {
    if(req.files === null){
        return res.status(400).json({ msg: 'Изображение не загружено' });
    }
    //Create user folder & clean file if exist
    const user = await User.findById(req.user.id).select('name');
    const imagename = (translit(user.name) + '_avatar.jpg').split(' ').join('');
    const path = `${settings.PROJECT_DIR}/client/public/uploads/${req.user.id}`;
    const filedir = `${path}/${imagename}`;
    if (!fs.existsSync(path)){
        fs.mkdir(path, { recursive: true }, (err) => {
            if(err){ console.error(err); return res.status(500).send('Server Error'); }
        });
    }
    //Upload file to folder
    const file = req.files.file;
    file.mv(filedir, err => {if(err){ console.error(err); return res.status(500).send('Server Error'); }});
    //Add file to db
    const filepath = `/uploads/${req.user.id}/${imagename}`;
    try{ await User.findOneAndUpdate({ _id: req.user.id }, { $set: { avatar: filepath }}); }
    catch(err){ console.error(err); return res.status(500).send('Server Error'); }

    res.json({ fileName: file.name, filePath: filepath,  msg: "Изображение успешно загружено" });

});

module.exports = router;