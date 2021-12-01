const initialState = () => ({
    firstName: '',
    lastName: '',
    email:'',
    password: '',
    nickname: '',
    aboutMe: '',
    activities: [],
    profileImage: '',
    isLoggedIn: false
})

const userReducer = (state = initialState(), action) => {
    switch(action.type){
        case 'SET_FIRST_NAME':
            return{
                ...state,
                firstName: action.payload
            }
        case 'SET_LAST_NAME':
            return{
                ...state,
                lastName: action.payload
            }
        case 'SET_EMAIL':
            return{
                ...state,
                email: action.payload
            }
        case 'SET_PASSWORD':
            return{
                ...state,
                password: action.payload
            }
        case 'SET_NICKNAME':
            return{
                ...state,
                nickname: action.payload
            }
        case 'SET_ABOUT_ME':
            return{
                ...state,
                aboutMe: action.payload
            }
        case 'SET_ACTIVITIES':
            return{
                ...state,
                activities: [...state.activities, action.payload]
            }
        case 'SET_PROFILE_IMAGE':
            return{
                ...state,
                profileImage: action.payload
            }
        case 'LOGIN_USER':
            return{
                ...state,
                isLoggedIn: action.payload
            }
        case 'LOGOUT_USER':
            return{
                state: initialState()
                
            }
        default: return state;

    }

}

export default userReducer