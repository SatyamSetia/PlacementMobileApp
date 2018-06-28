import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'studentDetail.html'
})

export default class CompaniesList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  student = this.navParams.data.item;
}
