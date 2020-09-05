import React, {useState, useCallback, useRef} from 'react';
import ReactCrop from 'react-image-crop';
import './AvatarUpload.css';
import * as axios from "axios";

const AvatarUpload = (props) => {
    const [upImg, setUpImg] = useState();
    const [imgRef, setImgRef] = useState(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 });
    const [isModal, setModal] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onLoad = useCallback(img => {
        setImgRef(img);
    }, []);

    const makeClientCrop = async crop => {
        if (imgRef && crop.width && crop.height) {
            createAvatar(imgRef, crop, 'avatar.jpg');
        }
    };

    const createAvatar = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }
                blob.name = fileName;
                setAvatar(blob);
            }, 'image/jpg');
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(!avatar){ setModal(false); return props.setAlert('Вы забыли выбрать изображение', 'danger', 5000); }
        if (avatar.size > 1048576){ setModal(false); return props.setAlert('Вы не можете загрузить изображение больше 1мб', 'danger', 5000); }
        switch(avatar.type){
            case "image/png": break;
            case "image/jpg": break;
            case "image/jpeg": break;
            default: setModal(false); return props.setAlert('Вы можете загрузить изображение только в формате png, jpg, jpeg', 'danger', 5000);
        }
        let formData = new FormData();
        formData.append('file', avatar, 'avatar.jpg');
        try{
            const response = await axios.put('/api/upload', formData, { headers: { 'Content-Type' : 'multipart/form-data' } });
            console.log(response);
        } catch (err){
            console.log(err);
            if(err.response && err.response.status === 500){ console.log('Server Error'); }
            else{
                if(err.response && err.response.data.msg){
                    const errors = err.response.data.msg;
                    errors.forEach(error => this.props.setAlert(error.msg, 'danger', 5000));
                }
            }
        }
    };

    const modRef = useRef(null);
    const handleModal = () => {
        let modListener = (e) => {
            if (!modRef.current.contains(e.target)){
                setModal(false);
                setCrop({ unit: '%', width: 30, aspect: 1 });
                window.removeEventListener('click', modListener);
            }
        };
        window.addEventListener('click', modListener);
        setModal(true);
    };

    return (
        <div className={`avatar-crop ${isModal ? "open" : "close"}`}>
            <div ref={modRef} className="modal-wrap">
                <div className="modal-box">
                    { isModal ? <div className="box-header"><h3 className="box-title">Новое изображение профиля</h3><button className="box-close" type="button" onClick={()=> setModal(false)}><svg className="times-close" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button></div> : null }
                    <form className="avatar-form" onSubmit={handleSubmit}>
                        <div className="box-control"><input id="ui" className="file-input" type="file" accept="image/*" onChange={onSelectFile} /><label onClick={() =>setTimeout(()=>handleModal(),500)} htmlFor="ui" className="file-label"><span className="icon icon-file-image" />Изменить</label></div>
                        { isModal  ? <ReactCrop src={upImg} onImageLoaded={onLoad} crop={crop} onChange={c => setCrop(c)} onComplete={makeClientCrop} /> : null }
                        { isModal  ? <div className="box-footer"><button onClick={handleSubmit} type="submit" name="au" value="save" className="upload-submit">Установить новое изображение профиля</button></div> : null }
                    </form>
                </div>
            </div>
            <div className="modal-mask" />
        </div>
    );
};

export default AvatarUpload