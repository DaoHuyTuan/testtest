import { VIEW_ALL_DATA } from "../actiontypes";

const initState = {
    infor:[],
    listPage:true,

}
const inforReducer = (state = initState,action) => {
    let newState = {...state}
    switch(action.type) {
        case VIEW_ALL_DATA:
        newState.listPage = !initState;
        // console.log(action.payload[0]);
       
        action.payload.map( (infors) => {
            newState.infor.push(infors);
        })
        return newState;
    }
    return newState
}


export default inforReducer;