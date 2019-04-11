import {
    CLOSE_CALENDAR,
    OPEN_CALENDAR,
    CHOSE_MONTH_CALENDAR,
    CHOSE_YEAR_CALENDAR,
    GET_MONTH,
    GET_YEAR,
    LOAD_CALENDAR,
    RELOAD_MONTH,
    RELOAD_YEAR,
    PICK_DATE,
    VALIDATE_DOB

} from "../actiontypes";

export const openCalendar = (nameMonth) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return dispatch => {
        dispatch({
            type:OPEN_CALENDAR,
            payload:true
        })
        dispatch({
            type:LOAD_CALENDAR,
            months:nameMonth,
            payload:monthNames[nameMonth-1]
        })
    }
}
export const closeCalendar = () => {
    return dispatch => {
        dispatch({
            type:CLOSE_CALENDAR,
            payload:false
        })
    }
}


export const choseMonth = () =>  {
    return dispatch => {
        dispatch({
            type:CHOSE_MONTH_CALENDAR,
        })
    }
}

export const choseYear = () =>  {
    return dispatch => {
        dispatch({
            type:CHOSE_YEAR_CALENDAR,
        })
    }
}

export const getMonth = (month) => {

    return dispatch => {
        dispatch({
            type:GET_MONTH,
            payload:month
        })
        dispatch(reLoadMonth(month))
    }
}
export const getYear = (year) => {
    return dispatch => {
        dispatch({
            type:GET_YEAR,
            payload:year
        })
        dispatch(reLoadYear(year))
    }
}
export const reLoadMonth = (month) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let numMonth;
    for(let i = 0;i < monthNames.length; i++) {
        if(month.innerHTML == monthNames[i]) {
            numMonth = i
        }
    }
    return dispatch => {
        dispatch({
            type:RELOAD_MONTH,
            months:numMonth + 1,
            monthsName: monthNames[numMonth]
        })
        
    }
}
export const reLoadYear = (year) => {
    return dispatch => {
        dispatch({
            type:RELOAD_YEAR,
            years:year,
        })   
    } 
}

export const pickDate = (date,month,year) => {
    return dispatch => {
        dispatch({
            type:PICK_DATE,
            payload:date + "/" + month + "/" + year
        })
        dispatch({
            type:VALIDATE_DOB,
            payload:date + "/" + month + "/" + year
        })
    }
}