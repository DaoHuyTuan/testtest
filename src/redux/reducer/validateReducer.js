import {
    TOGGLE_MUST_NUM,
    TOGGLE_LENGTHS,
    TOGGLE_MATCH_VN,
    VALIDATE_NAME,
    VALIDATE_DES,
    VALIDATE_PHONE,
    VALIDATE_FILE,
    VALIDATE_DOB,
    VALIDATE_FILE_SIZE,
    VALIDATE_FILE_WEIGHT, 
    IS_PHONE_VALIDATE
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
           isNamePass:false
        },
        phoneState: {
           state1:false,
           state2:false,
           state3:false,
           isPhonePass:false,
        },
        fileState: {
            size:false,
            weight:false,
            isFilePass:false
        }


    }
}

const validateReducer = (state = initState, action) => {
    let newState = {...state};
    switch(action.type) {
        case TOGGLE_MUST_NUM:
            return {
                ...state,
                isPass: {
                    ...state.isPass,
                    phoneState: {
                        ...state.isPass.phoneState,
                        state1: action.payload
                        }
                },
                phone: {
                    ...state.phone,
                    mustNum: action.payload
                }
            }

        case TOGGLE_LENGTHS:
            return {
                ...state,
                isPass: {
                    ...state.isPass,
                    phoneState: {
                        ...state.isPass.phoneState,
                        state2: action.payload
                    }
                },
                phone: {
                    ...state.phone,
                    lengths: action.payload
                }
            }
            
        case TOGGLE_MATCH_VN:
            return {
                ...state,
                isPass: {
                    ...state.isPass,
                    phoneState: {
                        ...state.isPass.phoneState,
                        state3: action.payload
                    }
                },
                phone: {
                    ...state.phone,
                    matchVN: action.payload
                }
            }


        case VALIDATE_NAME: 
              return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    name: action.payload
                },
                isPass: {
                    ...state.isPass,
                    nameState: {
                        ...state.isPass.nameState,
                        state1: action.status,
                        isNamePass:action.status
                    }
                }
            }

        case VALIDATE_DES: 
            newState.inforItem.des = action.payload;
            return newState;

        case VALIDATE_PHONE: 
            return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    phone: action.payload
                }
            }

        case VALIDATE_FILE: 
            newState.inforItem.image = action.payload;
            return newState;
            
        case VALIDATE_FILE_WEIGHT:
            newState.isPass.fileState.weight = action.payload;
            return newState;
            
        case VALIDATE_FILE_SIZE:
            newState.isPass.fileState.size = action.status;
            return newState;

        case VALIDATE_DOB:
            newState.inforItem.dob = action.payload;
            return newState;
            
        default:
            return newState
    }
}

export default validateReducer
