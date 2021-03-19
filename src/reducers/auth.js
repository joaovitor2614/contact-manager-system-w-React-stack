


export default (state = {
    uid: '',
    data: []

}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            }
        case 'LOGOUT':
            return {
            uid: '',
            data: []
            }
        
        
        case 'USER_DATA':
        
            return {
               ...state,
               data: [
                
                   action.data
               ]
            }
        default:
            return state
    }
}