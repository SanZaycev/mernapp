import React from 'react';
import './Alert.css';

const Alert = (props) => {
    let alerts;
    if(props.isAlert){
        alerts = props.alerts.map( a => {
            setTimeout(() => props.removeAlert(a.id), a.time);
            return <div key={a.id} data-id={a.id} className={`alert alert-${a.alertType}`}><span className="alert-msg">{a.msg}</span><span onClick={() => props.removeAlert(a.id)} className="icon icon-close" /></div>
        });
    }
    else{ alerts = null; }
    return alerts;
};

export default Alert;