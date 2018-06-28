import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'companies.html'
})
export default class CompaniesList {

  constructor(public navCtrl: NavController) {

  }

  items = [
    'c1',
    'c2',
    'c3'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
