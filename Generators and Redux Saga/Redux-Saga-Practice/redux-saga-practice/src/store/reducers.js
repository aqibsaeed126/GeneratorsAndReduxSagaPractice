const initialState = {
    age: 10,
}

export const reducer = (state = initialState, action) => {
    const newState = {... state};

    switch(action.type) {
        case 'AGE_UP_ASYNC': 
            newState.age += action.value;
            break;
        case 'AGE_DOWN': 
            newState.age -= action.value;
           break;    
    }
    return newState;
}