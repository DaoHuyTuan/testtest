import {
    VIEW_ALL_DATA,
    VALIDATE_NAME,
    VALIDATE_PHONE,
    VALIDATE_DES,
    CLEAR_FORM
} from "../actiontypes";
export const fetchAllData = () => {
    return dispatch => {
        fetch("https://testbadman.herokuapp.com/", {
            method: "GET",
            mode: "cors",
        })
        .then((res) => res.json())
        .then((arrData) =>
            dispatch({
                type:VIEW_ALL_DATA,
                payload:arrData
            }) 
        )
    }
}
export const viewAllData = () => {
    return dispatch => 
        dispatch( fetchAllData())  
}


// function for Name
export const changeName = (param) => {
    return dispatch => {
        dispatch(valiName(param))
    }
}
export const valiName = (param) => {
    return dispatch => {
        if(param.length >= 3) {
            dispatch({
                type:VALIDATE_NAME,
            }) 
        } else {
            console.log("loi")
        }
    }
}

// function for phone 

export const changePhone = (param) => {
    return dispatch => {
        dispatch(valiPhone(param));
    }
}
export const valiPhone = (param) => {
    return dispatch => {
        dispatch({
            type:VALIDATE_PHONE,
        }) 
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
        dispatch({
            type:VALIDATE_DES,
        }) 
    }
}