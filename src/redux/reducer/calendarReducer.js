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
    PICK_DATE
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
    numDays:"",
    date:""
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
            let newday = new Date(state.year,action.months, 0).getDate();
            const newstringDate = state.year + "-" + action.months + "-" + 1;
            console.log(newstringDate)
            const newdate = new Date(newstringDate);
            const newfirstdate = newdate.getDay();
            return {
                ...state,
                month:action.months,
                monthName:action.monthsName,
                firstDate:newfirstdate,
                numDays:newday
            }
        case RELOAD_YEAR: 
            
            let newday1 = new Date(parseInt(action.years),state.month, 0).getDate();
            const newstringDate1 = parseInt(action.years) + "-" + state.month + "-" + 1;
            console.log(newstringDate1)
            const newdate1 = new Date(newstringDate1);
            const newfirstdate1 = newdate1.getDay();
            return {
                ...state,
                firstDate:newfirstdate1,
                numDays:newday1
            }
        case PICK_DATE: 
            return {
                ...state,
                date: action.payload,
                isOpen:false
            }
        default: return state;
    }
}

export default calendarReducer