export const setFirstName = (firstName) => ({
    type: 'SET_FIRST_NAME',
    payload: firstName
})

export const setLastName = (lastName) => ({
    type: 'SET_LAST_NAME',
    payload: lastName
})

export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email
})

export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password
})

export const setNickname = (nickname) => ({
    type: 'SET_NICKNAME',
    payload: nickname
})

export const setAboutMe = (aboutMe) => ({
    type: 'SET_ABOUT_ME',
    payload: aboutMe
})

export const setActivities = (activity) => ({
    type: 'SET_ACTIVITIES',
    payload: activity
})

export const loginUser = () => ({
    type: 'LOGIN_USER',
    payload: true
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
})

