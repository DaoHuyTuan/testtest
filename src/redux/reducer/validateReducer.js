import {
    TOGGLE_MUST_NUM,
    TOGGLE_LENGTHS,
    TOGGLE_MATCH_VN,
    VALIDATE_NAME,
    VALIDATE_DES,
    VALIDATE_PHONE,
    VALIDATE_FILE,
    VALIDATE_DOB
} from "../actiontypes"
const initState = {
    phone:{
        lengths:false,
        matchVN:false,
        mustNum:false
    },
    inforItem: {
        name:"",
        phone:"",
        dob:"",
        des:"",
        image:""
    },
    isPass: {
       ispass:false,
       nameState:{
           state1:false,
           state2:false,
           isNamePass:false
       },
       phoneState: {
           state1:false,
           state2:false,
           state3:false,
           isPhonePass:false,
       }


    }
}

const validateReducer = (state = initState, action) => {
    let newState = {...state};
    switch(action.type) {
        case TOGGLE_MUST_NUM:
            newState.phone.mustNum = action.payload;
            newState.isPass.phoneState.state1 = true;
            if(newState.isPass.phoneState.state1 == true && newState.isPass.phoneState.state2 == true && newState.isPass.phoneState.state3 == true) {
                newState.isPass.phoneState.isPhonePass = true;
            }
            return newState

        case TOGGLE_LENGTHS:
            newState.phone.lengths = action.payload
            newState.isPass.phoneState.state2 = true;
            if(newState.isPass.phoneState.state1 == true && newState.isPass.phoneState.state2 == true && newState.isPass.phoneState.state3 == true) {
                newState.isPass.phoneState.isPhonePass = true;
            }
            return newState;
            
        case TOGGLE_MATCH_VN:
            newState.phone.matchVN = action.payload;
            newState.isPass.phoneState.state3 = true;
            if(newState.isPass.phoneState.state1 == true && newState.isPass.phoneState.state2 == true && newState.isPass.phoneState.state3 == true) {
                newState.isPass.phoneState.isPhonePass = true;
            }
            return newState;

        case VALIDATE_NAME: 
            newState.inforItem.name = action.payload;
            return newState;

        case VALIDATE_DES: 
            newState.inforItem.des = action.payload;
            return newState;

        case VALIDATE_PHONE: 
            newState.inforItem.phone = action.payload;
            return newState;

        case VALIDATE_FILE: 
            newState.inforItem.image = action.payload;
            return newState;

        case VALIDATE_DOB:
            newState.inforItem.dob = action.payload;
            return newState;
        default:
            return newState
    }
}

export default validateReducer