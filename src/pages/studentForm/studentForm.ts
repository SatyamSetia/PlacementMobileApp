import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'studentForm.html'
})
export default class StudentForm {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  title = this.navParams.data.title;
  header = this.navParams.data.header;
  student = this.navParams.data.student;
}
