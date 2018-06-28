import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import StudentDetail from '../studentDetail/studentDetail';
import StudentForm from '../studentForm/studentForm';

@Component({
  templateUrl: 'students.html'
})
export default class StudentsList {

  constructor(public navCtrl: NavController) {

  }

  items = [
    {
      name: 's1',
      branch: 'cse',
      roll: 12,
      cgpa: 7
    },
    {
      name: 's2',
      branch: 'ece',
      roll: 17,
      cgpa: 6
    },
    {
      name: 's3',
      branch: 'it',
      roll: 20,
      cgpa: 8
    }
  ];

  itemSelected(item: any) {
    this.navCtrl.push(StudentDetail,{
      item: item
    });
  }

  openStudentForm() {
    this.navCtrl.push(StudentForm, {
      title: 'Create',
      header: 'Enter Details',
      student: {}
    })
  }
}
