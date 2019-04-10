import {
    CLOSE_CALENDAR,
    OPEN_CALENDAR,
    CHOSE_MONTH_CALENDAR,
    CHOSE_YEAR_CALENDAR,
    GET_MONTH,
    GET_YEAR,
    LOAD_CALENDAR,
    RELOAD_MONTH
} from "../actiontypes"
const initState = {
    isOpen:false,
    year:"2019",
    month:"2",
    monthName:"",
    firstDate:"",
    days:"",
    isOpenMonth:false,
    isOpenYear:false,
    numDays:""
}

const calendarReducer = (state = initState,action) => {
    switch(action.type) {
        case LOAD_CALENDAR:
            let day = new Date(state.year, state.month, 0).getDate();
            const stringDate = state.year + "-" + state.month + "-" + 1;
            const date = new Date(stringDate);
            const firstdate = date.getDay();
            return {
                ...state,
                month: action.months,
                monthName: action.payload,
                numDays: day,
                firstDate: firstdate
            }
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
            return {
                ...state,
                isOpenMonth: !state.isOpenMonth,
                isOpenYear: false
            }
            
        case CHOSE_YEAR_CALENDAR:
            return {
                ...state,
                isOpenYear: !state.isOpenYear,
                isOpenMonth: false
            }
        case GET_MONTH:
            return {
                ...state,
                month:action.payload,
                isOpenMonth:false
            }
        case GET_YEAR:
            return {
                ...state,
                year:action.payload,
                isOpenYear:false
            }
        case RELOAD_MONTH:
        return {
            ...state
        }
        default: return state;
    }
}

export default calendarReducer