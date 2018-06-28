import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import StudentsList from '../students/students';
import CompaniesList from '../companies/companies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  manageStudentsSelected() {
    this.navCtrl.push(StudentsList);
  }

  manageCompaniesSelected() {
  	this.navCtrl.push(CompaniesList);
  }
}
