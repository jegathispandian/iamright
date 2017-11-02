import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import styles from '../css/Styles';

const ProfilePageRouter = () => {
  return (
    <Router
    navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}
    sceneStyle={styles.routerScene}
    >
   </Router>
 );
};

export default ProfilePageRouter;
