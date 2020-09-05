import {SET_ALERT, REMOVE_ALERT} from "./constants";
import {v4 as uuid} from "uuid";

const initialState = {
    alerts: [],
    isAlert: false
};
const alertReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_ALERT:
            let id = uuid();
            let newAlert = { id: id, msg: action.msg, alertType: action.alertType, time: action.time };
            return { ...state, alerts: [...state.alerts, newAlert], isAlert: true };
        case REMOVE_ALERT:
            const removeIndex = state.alerts.map(a => a.id).indexOf(action.id);
            state.alerts.splice(removeIndex,1);
            return { ...state };
        default:
            return { ...state};
    }
};
export const setAlertAC = (msg, alertType, time) => ({ type: SET_ALERT, msg, alertType, time });
export const removeAlertAC = (id) => ({ type: REMOVE_ALERT, id });
export default  alertReducer;