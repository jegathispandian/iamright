
class LoginName {
  static imageSources = {
    'EMAIL' : require('../../images/mail-icon.png'),
    'MOBILE_NUMBER' : require('../../images/mobile-icon.png')
  };

  static getLogoSource(loginType) {
    return this.imageSources[loginType];
  }
}

export default LoginName;
