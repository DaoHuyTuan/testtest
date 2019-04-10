import {
    CLOSE_CALENDAR,
    OPEN_CALENDAR,
    CHOSE_MONTH_CALENDAR,
    CHOSE_YEAR_CALENDAR
} from "../actiontypes";


export const closeCalendar = () => {
    return dispatch => {
        dispatch({
            type:CLOSE_CALENDAR,
            payload:false
        })
    }
}
export const openCalendar = () => {
    return dispatch => {
        dispatch({
            type:OPEN_CALENDAR,
            payload:true
        })
    }
}

export const choseMonth = () =>  {
    return dispatch => {
        dispatch({
            type:CHOSE_MONTH_CALENDAR,
            payload:""
        })
        dispatch(closeChoseYear()) 
    }
}
export const closeChoseMonth = () => {
    return dispatch => {
        dispatch({
            type:CHOSE_MONTH_CALENDAR,
            payload:false
        })
    }
}
export const choseYear = () =>  {
    return dispatch => {
        dispatch({
            type:CHOSE_YEAR_CALENDAR,
            payload:""
        })
        dispatch(closeChoseMonth()) 
    }
}
export const closeChoseYear = () => {
    return dispatch => {
        dispatch({
            type:CHOSE_YEAR_CALENDAR,
            payload:false
        })
    }
}