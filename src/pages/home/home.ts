import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import StudentsList from '../students/students';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    'Manage Students',
    'Manage Companies',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(StudentsList);
  }
}
