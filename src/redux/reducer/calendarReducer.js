import {
    CLOSE_CALENDAR,
    OPEN_CALENDAR,
    CHOSE_MONTH_CALENDAR,
    CHOSE_YEAR_CALENDAR
} from "../actiontypes"
const initState = {
    isOpen:false,
    year:"YEAR",
    month:"MONTH",
    date:"",
    day:"",
    isOpenMonth:false,
    isOpenYear:false,
    numDay:""
}

const calendarReducer = (state = initState,action) => {
    switch(action.type) {
        case CLOSE_CALENDAR:
            return {
                ...state,
                isOpen:false
            }
        case OPEN_CALENDAR:
            return {
                ...state,
                isOpen:true
            }
        
        case CHOSE_MONTH_CALENDAR: 
            if(action.payload == "") {
                return {
                    ...state,
                    isOpenMonth:!state.isOpenMonth
                }
            } else {
                return {
                    ...state,
                    isOpenMonth:action.payload
                }
            }
            
        case CHOSE_YEAR_CALENDAR:
        if(action.payload == "") {
            return {
                ...state,
                isOpenMonth:!state.isOpenYear
            }
        } else {
            return {
                ...state,
                isOpenMonth:action.payload
            }
        }
        default: return state;
    }
}

export default calendarReducer