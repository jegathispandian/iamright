import Api from '../apiV2';
import Config from '../../lib/Config.js';

class CaseMgmtSvc {
  static baseUrl = Config.services.baseUrl; 
  static port = Config.services.caseMgmtSvc.port;

  static getServiceRequests(userId, successCB, failureCB) {
    Api.get(
      `${this.baseUrl}:${this.port}/v1/support/tickets?userId=${userId}&sort_by=created_time&sort_order=desc`,
      { USER_ID: userId }
    ).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log(response);
          failureCB('Unable to fetch service requests');
      }
    });
  }

  static postServiceRequest(userId, serviceRequest, successCB, failureCB) {
    Api.post(
      `${this.baseUrl}:${this.port}/v1/support/tickets`,
      serviceRequest,
      { USER_ID: userId, 'Content-Type': 'application/json' }
    ).then(response => {
      if (response.status === 201) {
          successCB(response.body);
      } else {
          console.log(response);
          failureCB('Unable to create service request');
      }
    });
  }
}

export default CaseMgmtSvc;
