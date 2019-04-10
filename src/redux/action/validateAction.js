import  {
    VALIDATE_NAME,
    VALIDATE_PHONE,
    VALIDATE_DES,
    VALIDATE_FILE,
    TOGGLE_MUST_NUM,
    TOGGLE_LENGTHS,
    TOGGLE_MATCH_VN,
    VALIDATE_DOB,
    VALIDATE_FILE_SIZE,
    VALIDATE_FILE_WEIGHT,
    IS_PHONE_VALIDATE
} from "../actiontypes.js"
// function for Name
export const changeName = (param) => {
    return dispatch => {
        dispatch(valiName(param))
    }
}
export const valiName = (param) => {
    return dispatch => {
        const testName = /^[a-zA-Z]+$/;
        const result = testName.test(param)
        if(result === true && param.length >= 3) {
            dispatch({
                type:VALIDATE_NAME,
                payload:param,
                status:true
            }) 
        } else {
            dispatch({
                type:VALIDATE_NAME,
                payload:param,
                status:false
            })
            console.log("loi")
        }
    }
}

// function for phone 

export const changePhone = (param,lengths,matchVN,mustNum) => {
    return dispatch => {
        dispatch(valiPhone(param,mustNum));
        dispatch(valiMatchVN(param,lengths,matchVN,mustNum));
        dispatch(valiPhoneLength(param,lengths));
        dispatch(sendPhone(param,lengths,matchVN,mustNum))
        // dispatch(valiIPhonePass(lengths,matchVN,mustNum));
    }
}

export const sendPhone = (param,lengths,matchVN,mustNum) => {
    return dispatch => {
         
        if(param.length === 12 && matchVN === true && mustNum === true) {
            dispatch({
                type:IS_PHONE_VALIDATE,
                payload:true,
            })
        } else {
            dispatch({
                type:VALIDATE_PHONE,
                payload:param,
            })
        }
    }
}
export const valiPhone = (param,mustNum) => {
    return dispatch => {
        const testNumber = /^[0-9\+]*$/g;
        const resultVN = testNumber.test(param)
        if(param == "") {
            mustNum = false;
            console.log("null")
            dispatch({
                type:TOGGLE_MUST_NUM,
                payload:mustNum
            })
            return;
        }
        if(resultVN === true) {
            mustNum = true;
            dispatch({
                type:TOGGLE_MUST_NUM,
                payload:mustNum
            })
        } 
        if(resultVN !== true) {
            mustNum = false;
            dispatch({
                type:TOGGLE_MUST_NUM,
                payload:mustNum
            })
            console.log("khong duoc co chu va ky tu la")
        }
    }
}
export const valiPhoneLength = (param,lengths) => {
    return dispatch => {
        if(param.length == 12) {
            lengths = true;
            dispatch({
                type:TOGGLE_LENGTHS,
                payload:lengths
            })
        } else {
            lengths = false;
            dispatch({
                type:TOGGLE_LENGTHS,
                payload:lengths,
            })
            console.log("Không đúng độ dài")
        }
    }
}

export const valiMatchVN = (param,matchVN) => {
    return dispatch => {
        if (param.startsWith("+84") && param.lastIndexOf("+") == 0) {
            matchVN = true;
            dispatch({
                type:TOGGLE_MATCH_VN,
                payload:matchVN
            })
            
        } else {
            matchVN = false;
            dispatch({
                type:TOGGLE_MATCH_VN,
                payload:matchVN
            })
            console.log("phải đúng định dạng VN (+84)")
        }
        
        
    }
}
// function for description
export const changeDes = (param) => {
    return dispatch => {
        dispatch(valiDes(param));
    }
}
export const valiDes = (param) => {
    return dispatch => {
        if(param.length > 10 && param.length < 100 ) {
            console.log(param.length)
            dispatch({
                type:VALIDATE_DES,
                payload:param,
                status: true
            }) 
        } else {
            dispatch({
                type:VALIDATE_DES,
                payload:param,
                status: false
            }) 
        }
      
    }
}

export const changeFile = (param) => {
    return dispatch => {
        dispatch(valiIMGSize(param))
    }
}
const valiIMGSize = (param) => {
    return dispatch => {
        let newImage = new Image();
        newImage.src = window.URL.createObjectURL(param);
        let statuss;
        newImage.onload = function () {
            let imageHeight = newImage.naturalHeight;
            let imageWidth = newImage.naturalWidth;
            if(imageHeight > 150 && imageWidth > 250) {
                statuss = true;
                dispatch({
                    type:VALIDATE_FILE_SIZE,
                    status:statuss
                })
            }
            else {
                statuss = false;
                dispatch({
                    type:VALIDATE_FILE_SIZE,
                    status:statuss
                })
            }
        }
        dispatch(valiIMGWeight(param))
    }
}
export const valiIMGWeight = (param) => {
    return dispatch => {
        if(param.size >= 2000000) {
            dispatch({
                type:VALIDATE_FILE_WEIGHT,
                payload:false
            })
            console.log("can't upload more than 2MB")
        } else {
            dispatch({
                type:VALIDATE_FILE_WEIGHT,
                payload:true
            })
            
        } 
        dispatch(saveFile(param))
    }
}
export const saveFile = (param) => {
    return dispatch => {
        let reader = new FileReader();
        reader.readAsDataURL(param);
            reader.onload = (e) => {
                // console.log(reader)
                dispatch({
                    type: VALIDATE_FILE,
                    payload:reader.result
                })
            }
        }
    }
    
export const changeDob = (param) => {
    return dispatch => {
        dispatch({
            type:VALIDATE_DOB,
            payload:param
        }) 
    }
}
