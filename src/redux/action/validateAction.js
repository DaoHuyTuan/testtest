import  {
    VALIDATE_NAME,
    VALIDATE_PHONE,
    VALIDATE_DES,
    VALIDATE_FILE,
    TOGGLE_MUST_NUM,
    TOGGLE_LENGTHS,
    TOGGLE_MATCH_VN,
    VALIDATE_DOB
} from "../actiontypes.js"
// function for Name
export const changeName = (param) => {
    return dispatch => {
        dispatch(valiName(param))
    }
}
export const valiName = (param) => {
    return dispatch => {
        const testName = /[A-Za-z]/g;
        const result = testName.test(param)
        if(result === true && param.length >= 3) {
            dispatch({
                type:VALIDATE_NAME,
                payload:param
            }) 
        } else {
            console.log("loi")
        }
    }
}

// function for phone 

export const changePhone = (param,lengths,matchVN,mustNum) => {
    return dispatch => {
        dispatch(valiPhone(param,mustNum));
        
        dispatch(valiMatchVN(param,lengths,matchVN,mustNum));
        dispatch(sendPhone(param,lengths,matchVN,mustNum))
        dispatch(valiPhoneLength(param,lengths)); 
    }
}
export const sendPhone = (param,lengths,matchVN,mustNum) => {
    return dispatch => {
        if(param.length == 12  && matchVN === true && mustNum === true) {
            dispatch({
                type:VALIDATE_PHONE,
                payload:param
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

            console.log("Không đúng độ dài")
        }
    }
}

export const valiMatchVN = (param,lengths,matchVN,mustNum) => {
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
        if(param.length > 10 && param.length < 100 )
        dispatch({
            type:VALIDATE_DES,
            payload:param
        }) 
    }
}

export const changeFile = (param) => {
    return dispatch => {
        console.log(param)
        const newImage = new Image();
        newImage.src = window.URL.createObjectURL(param);
        newImage.onload = function () {
            const imageHeight = newImage.naturalHeight;
            const imageWidth = newImage.naturalWidth;
        
        }
        if(param.size >= 2000000) {
            console.log("can't upload more than 2MB")
        } else {
            let reader = new FileReader();
            reader.readAsDataURL(param);
            reader.onload = (e) => {
                console.log(reader)
                dispatch({
                    type: VALIDATE_FILE,
                    payload:reader.result
                })
            }
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