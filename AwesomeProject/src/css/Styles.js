'use strict';

import { StyleSheet } from 'react-native';

const colors = {
  blue: '#1EC1F7',
  darkBlue: '#005673',
  lightBlue: '#E8F9FF',
  borderColor: '#005673',
  white: '#ffffff',
};

const Styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff', // changing navbar color
  },
  navTitle: {
    fontWeight: 'bold',
    color: 'black', // changing navbar title color
  },
  routerScene: {
    paddingTop: 60
  },
  scene: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },

  list: {
    flexDirection: 'column',
  },

  listItem: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.lightBlue,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },

  listItemText: {
    fontSize: 18,
  },
  ButtonStyle: {
    flexDirection: 'column',
    padding: 30,
  },
  checkoutNonEditableText: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  }
});

export default Styles;
