import React from 'react';
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss';
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import Modal from '../components/Home/Modal';
import Fixtures from '../components/Fixtures/Fixtures';
import BottomNav from './../components/BottomNav';
import Page from '../components/Page';

const fixtures = () => {
  return (
    <Page description="Chats and Bants" title="fixtures || LOB">
      <div>
        <p className="m-auto pt-5 text-4xl"> Coming soon</p>
      </div>
    </Page>
  );
};

export default fixtures;
