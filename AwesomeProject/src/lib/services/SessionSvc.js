import Api from '../apiV2';
import Config from '../../lib/Config.js';

class SessionSvc {
  static baseUrl = Config.services.baseUrl;
  static port = Config.services.sessionSvc.port;

  static postSession(mobileNumber, emailId, successCB, failureCB) {
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
      `${this.baseUrl}:${this.port}/v1/session/`,
      body,
      { 'Content-Type': 'application/json' }
    ).then(response => {
      if (response.status === 200) {
          successCB(response.body);
      } else {
          console.log('Unable to create session: ', response);
          failureCB('Unable to create session');
      }
    });
  }
}

export default SessionSvc;
