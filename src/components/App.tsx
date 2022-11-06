import React from 'react';
import {
  Box,
} from '@mui/material';
import logo from '../logo.svg';
import styles from './App.module.scss';

export default function App() {
  return (
    <Box>
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit&nbsp;
            <code>src/App.tsx</code>
            &nbsp;and save to reload.
          </p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </div>
      </div>
    </Box>
  );
}
