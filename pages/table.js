import React from 'react';
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss';
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import BottomNav from '../components/BottomNav';
import Page from '../components/Page';

const table = () => {
  return (
    <Page description="Chats and Bants" title="table || LOB">
      <div>
        <p className="m-auto pt-5 text-4xl"> Coming soon</p>
      </div>
    </Page>
  );
};

export default table;
