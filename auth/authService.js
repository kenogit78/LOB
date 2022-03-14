import axios from 'axios'

const API_URL = 'https://league-of-billions.herokuapp.com/auth/register'

//Signup
const signup = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    signup,
}

export default authService

//Login