import { Component } from '@angular/core';

import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib-esm/types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private amplifyService: AmplifyService) {
    /** now you can access category APIs:
     * this.amplifyService.auth();          // AWS Amplify Auth
     * this.amplifyService.analytics();     // AWS Amplify Analytics
     * this.amplifyService.storage();       // AWS Amplify Storage
     * this.amplifyService.api();           // AWS Amplify API
     * this.amplifyService.cache();         // AWS Amplify Cache
     * this.amplifyService.pubsub();        // AWS Amplify PubSub
     **/
  }

  redirectToGoogle(): void {
    //Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google});
    Auth.federatedSignIn();
  }

}
