import Api from '../apiV2';
import Config from '../../lib/Config.js';
import * as LocatorConstants from '../LocatorConstants.js';

class ProcSvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.procSvc.port;

  static getURLForLocatorStates = function (source) {
    const domain = `${this.baseUrl}:${this.port}`;
    if (source === LocatorConstants.PRODUCT_CODE_GARAGES) {
      return domain + '/v1/procurement/garages?src=garage_list';
    } else if (source === LocatorConstants.PRODUCT_CODE_HOSPITALS) {
      return domain + '/v1/procurement/hospitals?src=hospital_list';
    }
    return '';
  }

  static getURLForLocator = function (source) {
    const domain = `${this.baseUrl}:${this.port}`;
    if (source === LocatorConstants.PRODUCT_CODE_GARAGES) {
      return domain + '/v1/procurement/garages';
    } else if (source === LocatorConstants.PRODUCT_CODE_HOSPITALS) {
      return domain + '/v1/procurement/hospitals';
    }
    return '';
  }

  static getLocatorStates(source, productCode, successCB, failureCB) {
    const url = this.getURLForLocatorStates(source);
    return Api.get(`${url}&productCode=${productCode}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to get locator states: ', response);
          failureCB('Unable to get states for Locator');
      }
    });
  }

  static getLocatorCities(stateName, source, productCode, successCB, failureCB) {
    const url = this.getURLForLocator(source);
    return Api.get(`${url}?src=city&productCode=${productCode}&value=${stateName}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to get cities for Locator: ', response);
          failureCB('Unable to get cities for Locator');
      }
    });
  }

  static getLocatorLocationsUsingCityName(cityName, source, productCode, successCB, failureCB) {
    const url = this.getURLForLocator(source);
    return Api.get(`${url}?src=city_details&productCode=${productCode}&value=${cityName}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to get locations: ', response);
          failureCB('Unable to get locations');
      }
    });
  }

  static getLocatorLocationsUsingPostalCode(postalCode, source, productCode, successCB, failureCB) {
    const url = this.getURLForLocator(source);
    return Api.get(`${url}?src=postalcode&productCode=${productCode}&postalCode=${postalCode}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to get locations: ', response);
          failureCB('Unable to get locations');
      }
    });
  }
static getPassengerCoverLimits(successCB, failureCB) {
   Api.get(`${this.baseUrl}:${this.port}/v1/procurement/products/restrictions/cars/ncb-attributes?lang=en`).then(response => {
    if (response.status === 200) {
      const passengerlimits = response.body.items[0].data.items
      .find(value => {
        return (value.code === 'PASSENGER_COVER_LIMIT');
    }).constraint_value
    .map((obj) => { const keys = Object.keys(obj); return keys[0]; });
        successCB(passengerlimits);
    } else {
        console.log('Unable to get passenger Limits addons: ', response);
        failureCB('Unable to get passenger Limits addons');
    }
  });
}
// static getPassengerCoverLimitsP() {
//   return new Promise((resolve, reject) => {
//    Api.get(`${this.baseUrl}:${this.port}/v1/procurement/products/restrictions/cars/ncb-attributes?lang=en`).then(response => {
//     if (response.status === 200) {
//       const passengerlimits = response.body.items[0].data.items
//       .find(value => {
//         return (value.code === 'PASSENGER_COVER_LIMIT');
//     }).constraint_value
//     .map((obj) => { const keys = Object.keys(obj); return keys[0]; });
//         resolve(passengerlimits);
//     } else {
//         console.log('Unable to get passenger Limits addons: ', response);
//         reject('Unable to get passenger Limits addons');
//     }
//   });
// });
// }

  static deleteIncompletePolicy(proposalId, successCB, failureCB) {
    Api.delete(`${this.baseUrl}:${this.port}/v1/procurement/proposals/${proposalId}`, null).then(response => {
      if (response.status === 204) {
          successCB();
      } else {
          console.log('Unable to delete policy: ', response);
          failureCB('Unable to delete policy');
      }
    });
  }

  static getListOfVendors(successCB, failureCB) {
    return Api.get(`${this.baseUrl}:${this.port}/v1/procurement/vendors`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to get list of vendors: ', response);
          failureCB('Unable to get list of vendors');
      }
    });
  }

  static getPolicyProposalDetails(proposalId, successCB, failureCB) {
    return Api.get(`${this.baseUrl}:${this.port}/v1/procurement/proposals/${proposalId}?fetch=all`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log(' unable to get policy proposal details ', response);
          failureCB('Unable to get policy proposal details');
      }
    });
  }

  static updateProposalWithAttributes(proposalId, body, errorText, successCB, failureCB) {
    Api.patch(`${this.baseUrl}:${this.port}/v1/procurement/proposals/${proposalId}`, body).then(response => {
      if (response.status === 204) {
          successCB();
      } else {
          console.log('errorText: ', response);
          failureCB(errorText);
      }
    });
  }

  static updateProposalWithContactAttributes(
      proposalId,
      firstName,
      lastName,
      mobileNumber,
      emailId,
      successCB,
      failureCB
  ) {
    const body = {
      op: 'replace',
			path: '/proposalAttributes',
			value: [
				{ categoryAttributeCode: 'AI-FIRST_NAME', value: firstName },
				{ categoryAttributeCode: 'AI-LAST_NAME', value: lastName },
				{	categoryAttributeCode: 'AI-MOBILE_NUMBER', value: mobileNumber },
				{ categoryAttributeCode: 'AI-EMAIL', value: emailId }
			]
    };
    this.updateProposalWithAttributes(proposalId, body, 'Unable to patch proposal with contact attributes', successCB, failureCB);
  }

static updateProposalWithCommunicationAddress(proposalId, userAddress, successCB, failureCB) {
  // TODO: fill value for AI-STATE, after Rage fixes the bug (not returning state name in user profile response)
  const body = {
    op: 'replace',
    path: '/proposalAttributes',
    value: [
      { categoryAttributeCode: 'AI-ADDRESS', value: userAddress.addressLine1 },
      { categoryAttributeCode: 'AI-STATE', value: ' ' },
      { categoryAttributeCode: 'AI-STATE_ID', value: userAddress.state.id },
      { categoryAttributeCode: 'AI-PLACE', value: userAddress.place },
      { categoryAttributeCode: 'AI-DISTRICT', value: userAddress.city },
      { categoryAttributeCode: 'AI-PINCODE', value: userAddress.postalCode },
      { categoryAttributeCode: 'AI-COUNTRY', value: 'India' },
      { categoryAttributeCode: 'AI-COUNTRY_CODE', value: userAddress.countryCode }
    ]
  };
  this.updateProposalWithAttributes(proposalId, body, 'Unable to patch proposal with communication address', successCB, failureCB);
}

static updateProposalWithPersonalDetails(
    proposalId,
    gender,
    dob,
    nomineeName,
    nomineeAge,
    nomineeRelationship,
    successCB,
    failureCB
) {
  const body = {
    op: 'replace',
    path: '/proposalAttributes',
    value: [
      { categoryAttributeCode: 'AI-GENDER', value: gender },
      { categoryAttributeCode: 'AI-DOB', value: dob },
      {	categoryAttributeCode: 'AI-NOMINEE_NAME', value: nomineeName },
      { categoryAttributeCode: 'AI-NOMINEE_AGE', value: nomineeAge },
      { categoryAttributeCode: 'AI-NOMINEE_RELATIONSHIP', value: nomineeRelationship }
    ]
  };
  this.updateProposalWithAttributes(proposalId, body, 'Unable to patch proposal with personal details', successCB, failureCB);
}

static updateCarProposalWithPreviousPolicyDetails(
    proposalId,
    previousPolicyInsurer,
    previousPolicyNumber,
    policyExpiryOn,
    ncbPercent,
    successCB,
    failureCB
) {
  const body = {
    op: 'replace',
    path: '/proposalAttributes',
    value: [
      { categoryAttributeCode: 'AC-PREVIOUS_POLICY_INSURER', value: previousPolicyInsurer },
      { categoryAttributeCode: 'AC-PREV_POLICY_NUMBER', value: previousPolicyNumber },
      {	categoryAttributeCode: 'AC-PREVIOUS_POLICY_EXPIRED_ON', value: policyExpiryOn },
      { categoryAttributeCode: 'AC-NCB_PERCENT', value: ncbPercent }
    ]
  };
  this.updateProposalWithAttributes(proposalId, body, 'Unable to patch car proposal with previous policy details', successCB, failureCB);
}

static updateCarProposalWithVehicleDetails(
    proposalId,
    engineNumber,
    chassisNumber,
    registrationDate,
    loanProvider,
    successCB,
    failureCB
) {
  const body = {
    op: 'replace',
    path: '/proposalAttributes',
    value: [
      { categoryAttributeCode: 'AC-ENGINE_NUMBER', value: engineNumber },
      { categoryAttributeCode: 'AC-CHASSIS_NUMBER', value: chassisNumber },
      {	categoryAttributeCode: 'AC-DATE_OF_REGISTRATION', value: registrationDate },

    ]
  };
  if (loanProvider === null) {
    body.value.push({ categoryAttributeCode: 'AC-LOAN_WITH_VEHICLE', value: 'No' });
  } else {
    body.value.push({ categoryAttributeCode: 'AC-LOAN_WITH_VEHICLE', value: 'Yes' });
    body.value.push({ categoryAttributeCode: 'AC-LOAN_PROVIDER', value: loanProvider });
  }
  this.updateProposalWithAttributes(proposalId, body, 'Unable to patch car proposal with vehicle details', successCB, failureCB);
}


//Health app:

static getRestrictions(restrictionELe) {
  return new Promise((resolve, reject) => {
    Api.get(`${this.baseUrl}:${this.port}/v1/procurement/restrictions?code=${restrictionELe}`).then(response => {
      if (response.status === 200) {
                  resolve(response.body['AH-SUM_ASSURED'].restriction.constraint_value);
      } else {
          console.log(`unable to get getRestrictions details for ${restrictionELe} error:${JSON.stringify(response)}`);
          reject('Unable to  getRestrictions details');
      }
    }).catch((error) => {
      console.log(`unable to get getRestrictions details for ${restrictionELe} error:${JSON.stringify(error)}`);
      reject('Unable to  getRestrictions details');
    });
  });
}

static createEnquiryId(body) {
  return new Promise((resolve, reject) => {
   Api.post(`${this.baseUrl}:${this.port}/v1/procurement/enquiries?lang=en`, body,
     { 'Content-Type': 'application/json' }).then((response) => {
       if (response.status === 200) {
                   resolve(response.body);
       } else {
           console.log(`unable to create enquiry Id for ${JSON.stringify(body)} error:${JSON.stringify(response)}`);
           reject('Unable to  create enquiry Id');
       }
     }).catch((error) => {
       console.log(`unable to create enquiry Id for ${JSON.stringify(body)} error:${JSON.stringify(error)}`);
       reject('Unable to  create enquiry Id');
     });
  });
}


}

export default ProcSvc;
