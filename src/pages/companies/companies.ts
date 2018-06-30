import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import CompanyForm from '../companyForm/companyForm';
import CompanyDetail from '../companyDetail/companyDetail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ROOT_URL } from '../../utils';

@Component({
  templateUrl: 'companies.html'
})
export default class CompaniesList {

  companies: any = null;

  constructor(public navCtrl: NavController, public http: Http) {
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.http.get(`${ROOT_URL}/companies`).map(res => res.json()).subscribe(data => {
      this.companies = data;
    });
  }
  
  ionViewWillEnter() {
    this.fetchCompanies();
  }

  companySelected(company: any) {
    this.navCtrl.push(CompanyDetail,{
      company: company
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
