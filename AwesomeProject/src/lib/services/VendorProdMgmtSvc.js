import Api from '../apiV2';
import Config from '../../lib/Config.js';

class VendorProdMgmtSvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.vendorProdMgmtSvc.port;

  static getCatalogRestriction(restrictionId, errorText, successCB, failureCB) {
      Api.get(`${this.baseUrl}:${this.port}/v1/catalog/restrictions/${restrictionId}`
      ).then(response => {
          if (response.status === 200) {
              successCB(response.body);
          } else {
              console.log(errorText, response);
              failureCB(errorText);
          }
      });
  }

  static getServiceRequestCategories(successCB, failureCB) {
      // TODO : After Rage fixes the issue with GET /v1/catalog/restrictions, replace the hardcoding with API call.
      const restrictionId = 'rRdq6GxXQ6Zk8hAAIYftz4QBNGssRuDGVe8KFFwfSa8';
      this.getCatalogRestriction(restrictionId, 'Unable to fetch service request categories', successCB, failureCB);
  }

  static getNomineeRelationshipTypes(successCB, failureCB) {
      // TODO : After Rage fixes the issue with GET /v1/catalog/restrictions, replace the hardcoding with API call.
      const restrictionId = 'trEbiMp93-e2OZbXqRKT6HV2imzYJESebG_hc706igc';
      this.getCatalogRestriction(restrictionId, 'Unable to fetch nominee relationship types', successCB, failureCB);
  }

  static getListOfLoanProviders(successCB, failureCB) {
      // TODO : After Rage fixes the issue with GET /v1/catalog/restrictions, replace the hardcoding with API call.
      const restrictionId = 'iybLVcY_BXRO9Y2czWtezrGn_erNknLdbbUWx-hjo7o';
      this.getCatalogRestriction(restrictionId, 'Unable to fetch vehicle loan providers', successCB, failureCB);
  }

  static getProductCategories(successCB, failureCB) {
      Api.get(`${this.baseUrl}:${this.port}/v1/catalog/categories`)
      .then(response => {
          if (response.status === 200) {
              successCB(response.body);
          } else {
              console.log('Unable to fetch product categories: ', response);
              failureCB('Unable to fetch product categories');
          }
      });
  }

  static getListOfProducts(successCB, failureCB) {
      Api.get(`${this.baseUrl}:${this.port}/v1/catalog/products`)
      .then(response => {
          if (response.status === 200) {
              successCB(response.body);
          } else {
              console.log('Unable to fetch list of products: ', response);
              failureCB('Unable to fetch list of products');
          }
      });
  }

  static getListOfRtoCities(successCB, failureCB) {
    return Api.get(`${this.baseUrl}:${this.port}/v1/collection/data/?nor=20&pfield=city&cname=rto_restrictions&distinct=distinct`).then(response => {
      if (response.status === 200) {
          const rtos = response.body.items.find(item => { return (item.collection_name === 'rto_restrictions'); });
          if (rtos.data.items !== undefined) {
            successCB(rtos.data.items);
          } else {
            successCB([]);
          }
      } else {
          console.log('Unable to get RTO cities: ', response);
          failureCB('Unable to get RTO cities');
      }
    });
  }

  static getListOfRTOsInThisCity(cityName, successCB, failureCB) {
    return Api.get(`${this.baseUrl}:${this.port}/v1/collection/data/?pfield=code&pfield=name&cname=rto_restrictions&city=${cityName}`).then(response => {
      if (response.status === 200) {
          const rtos = response.body.items.find(item => { return (item.collection_name === 'rto_restrictions'); });
          if (rtos.data.items !== undefined) {
            successCB(rtos.data.items);
          } else {
            successCB([]);
          }
      } else {
          console.log('Unable to get RTOs for the city: ', response);
          failureCB('Unable to get RTOs for the city');
      }
    });
  }

  static getStateDetails(stateId, successCB, failureCB) {
      Api.get(`${this.baseUrl}:${this.port}/v1/catalog/states/${stateId}`)
      .then(response => {
          if (response.status === 200) {
              successCB(response.body);
          } else {
              console.log('Unable to fetch state details: ', response);
              failureCB('Unable to fetch state details');
          }
      });
  }
//HEalth


  static getDiseaseDetails() {
    return new Promise((resolve, reject) => {
      Api.get('http://stage.arkainsure.com:9004/v1/catalog/diseases').then((resp) => {
        if (resp.status === 200) {
            resolve(resp.body.items);
        } else {
            console.log('Unable to fetch Disease details: ', JSON.stringify(resp));
            reject('Unable to fetch Disease  details');
        }
      }).catch((error) => { console.log('Unable to fetch Disease details: ', JSON.stringify(error)); reject('Unable to fetch Disease  details'); });
    });
  }
}


export default VendorProdMgmtSvc;
