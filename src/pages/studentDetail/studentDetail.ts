import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import StudentForm from '../studentForm/studentForm';

@Component({
  templateUrl: 'studentDetail.html'
})

export default class CompaniesList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  student = this.navParams.data.item;

  openStudentForm(student: any) {
    this.navCtrl.push(StudentForm,{
      title: 'Edit',
      header: 'Update Details',
      student: student
    });
  }
}
