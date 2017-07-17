import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

//pages
import { DashboardPage } from '../dashboard/dashboard';
import { JobsPage } from '../jobs/jobs';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // set the root pages for each tab
  tab1Root: any = DashboardPage;
  tab2Root: any = JobsPage;
  tab3Root: any = MessagesPage;
  tab4Root: any = ProfilePage;
  selectedIndex: number;

  constructor(navParams: NavParams) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }

}
