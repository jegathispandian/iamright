
class Util {
  static camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index !== 0 ? letter.toLowerCase() : letter.toUpperCase();
    });
  }

  static getCurrentlySupportedCategories(allCategories) {
    const supportedCategories = [{ _id: '-1', code: 'ALL', name: 'All Policies' }];
    allCategories.items.filter(
      item => { return ((item.code === 'CAR') || (item.code === 'BIKE') || (item.code === 'HEALTH')); }
    ).map(
      item => { supportedCategories.push(item); }
    );
    return supportedCategories;
  }

  static isDigitsAndOfAtleastThisSize(text, size) {
    return (text.length >= size) && (/^\d+$/.test(text));
  }

  static getDisplayableMobileNumber(value) {
    console.log(' 1111AAA0 ', value);
    const newValue = value.replace(/\s/g, '');
    console.log(' 1111AAA0 ', newValue);
    if (this.isDigitsAndOfAtleastThisSize(newValue, 11)) {
      console.log(' 1111AAAA1 ', newValue.substr(0, 5) + ' ' + newValue.substr(5, 5));
      return newValue.substr(0, 5) + ' ' + newValue.substr(5, 5);
    } else if (this.isDigitsAndOfAtleastThisSize(newValue, 6)) {
      console.log(' 1111AAAA2 ', newValue.substr(0, 5) + ' ' + newValue.substr(5, newValue.length - 5));
      return newValue.substr(0, 5) + ' ' + newValue.substr(5, newValue.length - 5);
    }
    console.log(' 1111AAAA3 ', newValue);
    return newValue;
  }

}

export default Util;
