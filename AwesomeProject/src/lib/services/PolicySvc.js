import Api from '../apiV2';
import Config from '../../lib/Config.js';

class PolicySvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.policySvc.port;

  static getPolicies(userId, categoryId, successCB, failureCB) {
    let categoryIdSuffix = '';
    if (categoryId !== null) {
      categoryIdSuffix = `&categoryId=${categoryId}`;
    }
    // TODO: Remove filter=true after Rage fixes the bug to accept statuses array in query params
    Api.get(`${this.baseUrl}:${this.port}/v1/policy/policies/user?userId=${userId}${categoryIdSuffix}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to fetch policies: ', response);
          failureCB('Unable to fetch policies');
      }
    });
  }

  // PolicyWeb Call
  static getPolicyDetails(policyId, successCB, failureCB) {
    Api.get(`${this.baseUrl}/policy/consumer/${policyId}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to fetch policy details: ', response);
          failureCB('Unable to fetch policy details');
      }
    });
  }

  static postClaim(claimRequest, successCB, failureCB) {
    Api.post(
      `${this.baseUrl}:${this.port}/v1/policy/policies/claims`,
      claimRequest
    ).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log(response);
          failureCB('Unable to create claim');
      }
    });
  }

}

export default PolicySvc;
