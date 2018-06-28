import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'companyFOrm.html'
})
export default class CompanyForm {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  title = this.navParams.data.title;
  header = this.navParams.data.header;
  company = this.navParams.data.company;
}
