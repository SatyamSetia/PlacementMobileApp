import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'students.html'
})
export default class StudentsList {

  constructor(public navCtrl: NavController) {

  }

  items = [
    's1',
    's2',
    's3'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
