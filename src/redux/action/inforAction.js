import {
    VIEW_ALL_DATA,
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

export const sendData = (Iname,Iphone,Idob,Ides,Iimage) => {
    return dispatch => {
        fetch("https://testbadman.herokuapp.com/send", {
            method:"POST",
            mode:"cors",
            credentials: 'omit',
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: Iname,
                phone: Iphone,
                des:Ides,
                dob:Idob,
                image:Iimage
            })
        })
        .then((result) => console.log(result))
    }
}

