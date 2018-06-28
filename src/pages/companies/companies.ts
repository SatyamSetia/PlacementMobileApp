import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import CompanyForm from '../companyForm/companyForm';
import CompanyDetail from '../companyDetail/companyDetail';

@Component({
  templateUrl: 'companies.html'
})
export default class CompaniesList {

  constructor(public navCtrl: NavController) {

  }

  items = [
    {
      name: 'c1',
      profile: 'sde',
      openings: 2
    },
    {
      name: 'c2',
      profile: 'hr',
      openings: 5
    },
    {
      name: 'c3',
      profile: 'analyst',
      openings: 4
    }
  ];

  itemSelected(item: any) {
    this.navCtrl.push(CompanyDetail,{
      item: item
    })
  }

  openCompanyForm() {
    this.navCtrl.push(CompanyForm, {
      title: 'Register Company',
      header: 'Enter Details',
      company: {}
    })
  }
}
