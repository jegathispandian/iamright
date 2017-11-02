
class CryptoUtils {


  static encryptAES(data) {
    const CryptoJS = require('crypto-js');

    const secretKey = '0123456789abcdef';
    console.log(data);
    console.log(secretKey);
    const ciphertext = CryptoJS.AES.encrypt(data, secretKey);
    console.log(ciphertext.toString());
    return ciphertext.toString();
  }

  static decryptAES(data) {
    const CryptoJS = require('crypto-js');

    const secretKey = '0123456789abcdef';
    const bytes = CryptoJS.AES.decrypt(data.toString(), secretKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
}

export default CryptoUtils;
