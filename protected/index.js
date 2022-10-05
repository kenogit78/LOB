import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '../components/misc/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken, setCredentials } from '../auth/authSlice';
import axios from 'axios';

const ProtectedHOC = (WrappedComponent) => {
  return (props) => {
    //Loading state
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState();
    const dispatch = useDispatch();

    // Auth State
    // const accessToken = useSelector(selectCurrentToken);
    console.log(accessToken);

    //   console.log(userProfile);
    const router = useRouter();

    // useEffect(() => {
    //   try {
    //     const refreshData = () =>
    //       axios
    //         .get('http://localhost:8000/auth/refresh', {
    //           withCredentials: true,
    //         })
    //         .then((res) => {
    //           dispatch(setCredentials({ ...res.data }));
    //           setAccessToken(res.data);
    //         });
    //     refreshData();
    //   } catch (err) {
    //     console.log(err);
    //     if (err) {
    //       // router.push('/');
    //     }
    //   }
    // }, []);

    useEffect(() => {
      if (!accessToken) {
        console.log('I made it', accessToken);
        // router.push('/');
      } else {
        setLoading(false);
      }
    }, [accessToken]);

    if (loading) return <Loader />;
    return <WrappedComponent {...props} />;
  };
  return null;
};

export default ProtectedHOC;
