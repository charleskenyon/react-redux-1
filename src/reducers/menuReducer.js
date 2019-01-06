export const initialMenuState = {
    isFetching: false,
    fetchSuccess: false,
    courses: {}
} 

export const menuReducer = (state = initialMenuState, action) => {
       
    switch (action.type) {
        
        case 'REQUEST_MENU':
            return { 
                ...state, 
                isFetching: true 
            };

        case 'RECEIVE_MENU':
            return {
                courses: action.courses, 
                isFetching: false, 
                fetchSuccess: true 
            };
    }
    
    return state;
}