import Api from '../apiV2';
import Config from '../../lib/Config.js';

class UserSvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.userSvc.port;

  static postUserUsingLoginNames(mobileNumber, emailId, successCB, failureCB) {
    const body = {
			loginNames: [
				{
					loginName: emailId,
					type: 'EMAIL'
				},
				{
					loginName: mobileNumber,
					type: 'MOBILE_NUMBER'
				}
			],
			userGroupId: Config.consumerEncrytedGroupId,
			lang: 'en',
			source: 'signup'
		};

    Api.post(
      `${this.baseUrl}:${this.port}/v1/customer/users`,
      body,
      { 'Content-Type': 'application/json' }
    ).then(response => {
      console.log(' postUser body ', body);
      console.log(' postUser response ', response);
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to create user: ', response);
          failureCB('Unable to create user');
      }
    });
  }

  static getUserProfile(userId, successCB, failureCB) {
    Api.get(`${this.baseUrl}:${this.port}/v1/customer/users/${userId}`).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to fetch user profile: ', response);
          failureCB('Unable to fetch user profile');
      }
    });
  }

  static getUserIdFromMobileOrEmailId(phoneNumber, emailId, successCB, failureCB) {
    if (phoneNumber != null) {
      Api.get(`${this.baseUrl}:${this.port}/v1/customer/users?loginNames.loginName=${phoneNumber}`).then(response => {
        if (response.status === 200) {
          successCB(response.body);
        } else {
          console.log('Unable to get User ID using Mobile: ', response);
          failureCB('Unable to get User ID using Mobile');
        }
      });
    }
    if (emailId != null) {
      Api.get(`${this.baseUrl}:${this.port}/v1/customer/users?loginNames.loginName=${emailId}`).then(response => {
        if (response.status === 200) {
          successCB(response.body);
        } else {
          console.log('Unable to get User ID using Email: ', response);
          failureCB('Unable to get User ID using Email');
        }
      });
    }
  }

  static postUserAddress(userId, address, successCB, failureCB) {
    Api.post(
      `${this.baseUrl}:${this.port}/v1/customer/users/${userId}/addresses`,
      address,
      { 'Content-Type': 'application/json' }
  ).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log(`Unable to add user address:+${address}` , response);
          failureCB('Unable to add user address');
      }
    });
  }

  static putUserAddress(address, successCB, failureCB) {
    Api.put(`${this.baseUrl}:${this.port}/v1/customer/users/${address.userId}/addresses/${address.id}`, address).then(response => {
      if (response.status === 200) {
          successCB();
      } else {
          console.log(`Unable to update user address:${JSON.stringify(address,null,2)}`, response);
          failureCB('Unable to update user address');
      }
    });
  }

  static putUserProfile(userProfile, successCB, failureCB) {
    Api.put(`${this.baseUrl}:${this.port}/v1/customer/users/${userProfile.id}`, userProfile).then(response => {
      if (response.status === 200) {
          successCB();
      } else {
          console.log('Unable to update user profile: ', response);
          failureCB('Unable to update user profile');
      }
    });
  }

}

export default UserSvc;
