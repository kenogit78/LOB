// import axios from 'axios'
// import { createContext, useState, useEffect } from 'react'

// const LoginContext = createContext({})

// export const LoginContextProvider = ({ children }) => {

//     const [images, setImages] =  useState([])

//     useEffect(() => {
//         fetchImages()
//     }, [])

//     const fetchImages = () => {
//         const apiRoot = "https://api.unsplash.com";
//         const accessKey = process.env.REACT_APP_ACCESSKEY;

//         axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`).then(res => setImages([...images, ...res.data]))
//     }

//     return (
//         <LoginContext.Provider
//             value={{
//                 images, fetchImages
//             }}
//         >
//             {children}
//         </LoginContext.Provider>
//     )
// }

// export default UnsplashImageContext
