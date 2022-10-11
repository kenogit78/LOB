import { useEffect, useState } from 'react';
import Link from 'next/link';
import PlayerImages from './PlayerImages';
import styles from '../compStyles/Onboarding.module.scss';
import google_img from '../../assets/google.png';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  reset,
  selectCurrentUser,
  setCredentials,
} from '../../auth/authSlice';

import { logout } from '../../auth/authSlice';
import { useRouter } from 'next/router';
import Loader from '../misc/Loader';
import LoaderSmall from '../LoaderSmall';

//Toastify
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginMutation } from '../../auth/authApiSlice';
import axios from 'axios';

function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  console.log(user);

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        className: `${styles.error_toast}`,
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (isSuccess || user) {
      // router.push('/homepage');
    }
    // dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    // dispatch(login(userData));
    try {
      const loginData = await login(userData).unwrap();
      dispatch(setCredentials({ ...loginData, userData }));
      router.push('/homepage');
    } catch (err) {
      toast.error(err.data.message);
      // console.log(err);
    }
  };

  //USE EFFECT TO REDIRECT TO HOME IF USER IS LOGGED IN
  useEffect(() => {
    const refreshData = axios
      .get('https://league-of-billions.up.railway.app/auth/refresh', {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setCredentials({ ...res.data }));
        // setLoading(false);
        router.push('/homepage');
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  }, []);

  const onLogout = async (e) => {
    e.preventDefault();
    // dispatch(logout());
    // dispatch(reset());
    axios
      .get('https://league-of-billions.up.railway.app/auth/logout', {
        withCredentials: true,
      })
      .then((res) => {});
    router.push('/login');
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = formData;

  console.log(loading);

  if (loading) return <Loader />;

  return (
    <div className={`${styles.login_container}`}>
      <div className={styles.heading_login}>
        <h1> Sign In</h1>
        <Link href="/signup">Sign up</Link>
      </div>
      <form onSubmit={onSubmit}>
        <div className={`${styles.login_input_group}`}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={onChange}
            className={`${styles.login_input}`}
          />
        </div>
        <div className={`${styles.login_input_group}`}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'password' : 'text'}
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className={`${styles.login_input}`}
          />
          <div
            className={`${styles.remember} flex justify-between items-center pt-4`}
          >
            <div className="flex justify-between items-center">
              <input type="checkbox" name="" id="" />
              <span className="pl-4">Remember Me</span>
            </div>
            <Link href="#">Forgot password</Link>
          </div>
        </div>
        <div className={styles.button_container}>
          <input
            type="submit"
            value="Sign in"
            className={`${styles.login_input_button}`}
          />
          {isLoading ? <LoaderSmall /> : null}
        </div>
        {/* <div className={`${styles.divider} py-6`}>
          <p>or</p>
        </div> */}
      </form>
      {/* <div className={`${styles.login_google}`}>
        <button
          className={`${styles.login_google_btn} flex pl-28 items-center`}
          onClick={onLogout}
        >
          <Image src={google_img} alt="google logo" />
          <span className="pl-28">Sign in using Google</span>
        </button>
      </div> */}
      <Toaster />
    </div>
  );
}

export default Login;
