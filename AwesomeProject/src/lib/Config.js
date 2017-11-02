
const Configurations = {
    production: {
        consumerEncrytedGroupId: 'EqTraX5StRb4FiQjWzL90g',
        services: {
            baseUrl: 'http://imright.com',
            userSvc: {
              port: 9002
            },
            vendorProdMgmtSvc: {
              port: 9004
            },
            sessionSvc: {
              port: 9000
            },
            procWebSvc: {
              port: 9016
            },
            procSvc: {
              port: 9005
            },
            policySvc: {
              port: 9014
            },
            caseMgmtSvc: {
              port: 11008
            }
        }
    },
    development: {
        consumerEncrytedGroupId: 'EqTraX5StRb4FiQjWzL90g',
        services: {
            baseUrl: 'http://api.imright.com',
            userSvc: {
              port: 80
            },
            vendorProdMgmtSvc: {
              port: 80
            },
            sessionSvc: {
              port: 80
            },
            procWebSvc: {
              port: 80
            },
            procSvc: {
              port: 80
            },
            policySvc: {
              port: 80
            },
            caseMgmtSvc: {
              port: 80
            }
          },
          HEALTH_CATEGORY_ID: 'jA5usjKmf2xb7nNKt1hBqnxnPNCy4czI6iklhfVcx3k'
    }
};


function getEnvironment() {
    // TODO: Insert logic here to get the current platform (e.g. staging, production, etc)
    //var platform = getPlatform()
    const platform = 'development';

    return Configurations[platform];
}

const Config = getEnvironment();
module.exports = Config;
