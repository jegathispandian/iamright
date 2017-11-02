import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from '../Home';
import Styles from '../lib/Styles';


const MainRouter = () => {
    return (
        <Router
        sceneStyle={styles.routerScene}
        hideNavBar
        >
          <Scene
            key='Home'
            component={Home}
            //titleStyle={Styles.homeNavTitle()}
          //  navigationBarStyle={Styles.homeNavBar()}
          //  rightButtonImage={require('../assets/ic_dehaze_black_24dp.png')}
          //  rightButtonImageStyle={{ width: 35, height: 35 }}
          //  onRight={() => { Actions.Home(); }}
            title='AwesomeProject'
          />
        </Router>
    );
};
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    height: 75,
    shadowColor: '#ffffff', // changing navbar color
    borderColor: '#ffffff',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 0,
  },
  navTitle: {
    fontWeight: 'bold',
    color: 'white', // changing navbar title color
  },
  routerScene: {
    paddingTop: 0,

  }
});
export default MainRouter;
