import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import CompanyForm from '../companyForm/companyForm';

@Component({
  templateUrl: 'companyDetail.html'
})

export default class CompanyDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  company = this.navParams.data.item;

  openCompanyForm(company: any) {
    this.navCtrl.push(CompanyForm,{
      title: 'Edit',
      header: 'Update Details',
      company: company
    });
  }
}
