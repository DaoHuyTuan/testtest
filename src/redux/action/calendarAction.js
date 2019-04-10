import {
    CLOSE_CALENDAR,
    OPEN_CALENDAR,
    CHOSE_MONTH_CALENDAR,
    CHOSE_YEAR_CALENDAR,
    GET_MONTH,
    GET_YEAR,
    LOAD_CALENDAR,
    RELOAD_MONTH
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
    console.log(month)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    for(let i = 0;i < monthNames.length; i++) {
        if(month == monthNames[i]) {
            console.log(i)
        }
        
    }
    return dispatch => {
        dispatch({
            type:RELOAD_MONTH,
            months:month
        })
        
    }
}
export const reLoadYear = (year) => {
    
    
}