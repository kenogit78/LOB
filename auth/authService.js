import axios from 'axios'

const API_URL = 'https://league-of-billions.herokuapp.com/auth/'

//Signup
const signup = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


//Login
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    signup,
    login,
    logout,
}

export default authService

//Login