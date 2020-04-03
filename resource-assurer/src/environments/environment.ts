// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AccountStorageHelper } from 'src/lib/blockchain/configuration/account-storage-helper';
import { ConfigurationHelper } from 'src/lib/blockchain/configuration/configuration-helper';

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/**
 * Set development user account.
 * Set development blockchain RPC URI.
 * This is activated when application 
 * is run in development mode only.
*/
export const init = async () => {
  const accountHelper = new AccountStorageHelper();
  const configurationHelper = new ConfigurationHelper();
  if (!(await accountHelper.isSet())) {
    accountHelper.store({
      name: 'eosio',
      privateKey: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
    });
    console.log('[DEV] USER ACCOUNT WAS SET.');
  }
  if (!(await configurationHelper.rpcUriIsSet())) {
    configurationHelper.storeRpcUri('http://localhost:8888');
    console.log('[DEV] RPC URI WAS SET.');
  }
}