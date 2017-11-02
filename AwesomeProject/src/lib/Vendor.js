
class Vendor {
  static imageSources = {
    'BAJAJ_ALLIANZ' : require('../../images/vendor_logos/logo_bajaj_allianz.png'),
    'IFFCO_TOKIO' : require('../../images/vendor_logos/logo_iffco_tokio.png'),
    'RELIANCE_GENERAL' : require('../../images/vendor_logos/logo_reliance_general.png'),
    'RELIGARE_HEALTH' : require('../../images/vendor_logos/logo_religare_health.png'),
    'ROYAL_SUNDARAM' : require('../../images/vendor_logos/logo_royal_sundaram.png'),
    'UNIVERSAL_SOMPO' : require('../../images/vendor_logos/logo_universal_sompo.png')
  };

  static getLogoSource(vendorCode) {
    return this.imageSources[vendorCode];
  }
}

export default Vendor;
