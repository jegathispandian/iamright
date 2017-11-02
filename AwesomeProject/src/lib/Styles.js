import { PixelRatio } from 'react-native';

class Styles {

  static circle(radius, color) {
    return {
      width: radius, height: radius, borderRadius: radius / 2, backgroundColor: color
    };
  }

  static card() {
    return {
      borderRadius: 2,
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      borderColor: '#ccc',
      backgroundColor: '#fff',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    };
  }

  static formCard() {
    return {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20
    };
  }
static pageLayout() {
  return {
    paddingTop: 75,
    paddingLeft: 15,
    paddingRight: 15,
  };
}
  static formCardWithBorder() {
    return {
      borderRadius: 2,
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      borderColor: '#ccc',
      backgroundColor: '#fff',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20
    };
  }

  static profileCard() {
    return {
      borderRadius: 2,
      borderBottomWidth: 2,
      shadowColor: '#440000',
      shadowOffset: { width: 100, height: 50 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      borderColor: '#ccc',
      backgroundColor: '#fff',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    };
  }

  static errorAlertCard() {
    return {
      borderRadius: 2,
      borderBottomWidth: 2,
      backgroundColor: '#eee',
      shadowColor: '#440000',
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      borderColor: '#ccc',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20
    };
  }

  static locatorNavTitle() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 22, color: '#23526d' };
  }

  static locatorNavBar() {
    return {
      backgroundColor: '#ffffff',
      height: 40,
      shadowColor: '#ffffff', // changing navbar color
      borderColor: '#ffffff',
      borderBottomWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 0,
    };
  }

  static loginNavTitle() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 22, color: '#23526d' };
  }


  static loginNavBar() {
    return {
      backgroundColor: '#ffffff',
      height: 40,
      shadowColor: '#ffffff', // changing navbar color
      borderColor: '#ffffff',
      borderBottomWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 0,
    };
  }

  static myAccountNavTitle() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 22, color: '#23526d' };
  }

  static myAccountNavBar() {
    return {
      backgroundColor: '#ffffff',
      height: 40,
      shadowColor: '#ffffff', // changing navbar color
      borderColor: '#ffffff',
      borderBottomWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 0,
    };
  }

  static homeNavTitle() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 22, color: '#23526d' };
  }

  static homeNavBar() {
    return {
      backgroundColor: '#ffffff',
      height: 40,
      shadowColor: '#ffffff', // changing navbar color
      borderColor: '#ffffff',
      borderBottomWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 0,
    };
  }

  static navBar() {
    return { backgroundColor: '#eeecec' };
  }

  static navBarText() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 18, color: '#23526d' };
  }

  static navBarActiveText() {
    return { fontFamily: 'Bebas Neue', fontWeight: 'normal', fontSize: 18, color: '#ff781a' };
  }

  static cardTitle() {
    return { backgroundColor: '#73848d', marginLeft: 1, marginRight: 1 };
  }
  static cardText() {
    //return { fontFamily: 'Blue Highway', fontSize: 15, color: '#ffffff' };
    return { fontFamily: 'Bebas Neue', fontSize: 17, color: '#ffffff' };
  }

  static label() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#25516a' };
  }

  static borderedLabel() {
    return {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#b9c1c5',
        borderWidth: 1,
        borderRadius: 5
      };
  }

  static text() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c' };
  }

  static busyAnimationText() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c' };
  }

  static pageHeading() {
    return { fontFamily: 'Bebas Neue', fontSize: 20, color: '#7c888c' };
  }

  static tableLabel() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c' };
  }

  static tableValue() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c' };
  }

  static pickerValue() {
    return { fontFamily: 'Tahoma', fontSize: 13, color: '#7c888c' };
  }

  static textInputView() {
    return { borderBottomColor: '#ddd', borderBottomWidth: 1 };
  }

  static textInputErrorView() {
    return { borderBottomColor: '#f50000', borderBottomWidth: 1 };
  }

  static textInput() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c', height: 35 };
  }

  static textMultilineInput() {
    return { fontFamily: 'Tahoma', fontSize: 14, color: '#7c888c', height: 60 };
  }

  static errorAlert() {
    return { fontFamily: 'Tahoma', fontSize: 12, color: '#f50000' };
  }

  static spinnerStyle() {
    return {
      justifyContent: 'center',
      alignItems: 'center',
    };
  }
}

export default Styles;
