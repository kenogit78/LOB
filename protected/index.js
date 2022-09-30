// export function requireAuthentication(gssp) {
//     return async (context) => {
//         const { req, res } = context;
//         // const token = req.cookies.userToken;

//         // const token = req.header?.cookies
//         const token = req.cookies

//         console.log(req)

//         if (!token) {
//             // Redirect to login page
//             return {
//                 redirect: {
//                     destination: '/login',
//                     statusCode: 302
//                 }
//             };
//         }

//         return await gssp(context); // Continue on to call `getServerSideProps` logic
//     }
// }

import { useRouter } from "next/router";
const requireAuthentication = (WrappedComponent) => {
  return function Auth (props) {
    // checks whether we are on client / browser or server.
    const Router = useRouter();
    if (typeof window !== "undefined") {

      const user = JSON.parse(localStorage.getItem("user"));
      
      const accessToken = user?.data.access_token

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
          Router.push('/')
        }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default requireAuthentication;
