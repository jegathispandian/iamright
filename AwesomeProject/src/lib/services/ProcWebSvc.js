import Api from '../apiV2';
import Config from '../../lib/Config.js';

class ProcWebSvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.procWebSvc.port;

  static getIncompletePolicies(userId, successCB, failureCB) {
    Api.get(`${this.baseUrl}:${this.port}/abandon/transactions/${userId}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to fetch incomplete policies: ', response);
          failureCB('Unable to fetch incomplete policies');
      }
    });
  }

  static getPostalCodeDetails(postalCode, successCB, failureCB) {
    Api.get(`${this.baseUrl}/postalcode/search/?src=${/^[a-zA-Z]+$/.test(postalCode) ? 'city' : 'pincode'}&term=${postalCode}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to fetch postal code details: ', response);
          failureCB('Unable to fetch postal code details');
      }
    });
  }
  static updateUserIdProposalId(userId, proposalId) {
    const body = {
	user_id: userId,
	proposal_id: proposalId
};
     return new Promise((resolve, reject) => {
       Api.post(`${this.baseUrl}/update/userid/proposal/`, body, { 'Content-Type': 'application/json' }).then(response => {
         if (response.status === 200) {
             resolve(response.body);
         } else {
             console.log('Unable to fetch postal code details: ', response);
             reject('Unable to fetch postal code details');
         }
       });
     });
  }

}

export default ProcWebSvc;
