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
        },
        desState: {
            lengths:false,
            isDesPass:false
        },
        dobState: {
            isDobPass:false
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
            // newState.phone.lengths = action.payload
            // newState.isPass.phoneState.state2 = action.payload;

            // if(newState.isPass.phoneState.state1 == true && newState.isPass.phoneState.state2 == true && newState.isPass.phoneState.state3 == true) {
            //     newState.isPass.phoneState.isPhonePass = true;
            // }
            // return newState;
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
            return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    des: action.payload
                },
                isPass: {
                    ...state.isPass,
                    desState: {
                        ...state.isPass.desState,
                        isDesPass: action.status,
                        lengths:action.status
                    }
                }
            }

        case VALIDATE_PHONE: 
            return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    phone: action.payload
                }
            }
        case IS_PHONE_VALIDATE: 
            return {
                ...state,
                isPass: {
                    ...state.isPass,
                    phoneState: {
                        ...state.isPass.phoneState,
                        isPhonePass: action.payload
                    }
                    
                }
            }
        case VALIDATE_FILE: 
            return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    image: action.payload,
                },
                isPass: {
                    ...state.isPass,
                    fileState: {
                        ...state.isPass.fileState,
                        isFilePass:action.isFilepass
                    }
                }

            }
            
        case VALIDATE_FILE_WEIGHT:
            return {
                ...state,
                isPass: {
                    ...state.isPass,
                    fileState: {
                        ...state.isPass.fileState,
                        weight: action.payload
                    }
                }
            }
            
        case VALIDATE_FILE_SIZE:
        return {
            ...state,
            isPass: {
                ...state.isPass,
                fileState: {
                    ...state.isPass.fileState,
                    size: action.status
                }
            }
        }

        case VALIDATE_DOB:
            return {
                ...state,
                inforItem: {
                    ...state.inforItem,
                    dob: action.payload,
                    
                },
                isPass: {
                    ...state.isPass,
                    dobState: {
                        ...state.isPass.dobState,
                        isDobPass:true
                    }
                }
            }
        default:
            return newState
    }
}

export default validateReducer