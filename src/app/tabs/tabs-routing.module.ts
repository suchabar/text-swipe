import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../explore-tab/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'dates',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dates-tab/dates-tab.module').then(m => m.DatesTabPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../free-slots-tab/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'user-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../user-profile-tab/user-profile.module').then(m => m.UserProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
