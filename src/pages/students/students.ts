import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import StudentDetail from '../studentDetail/studentDetail';
import StudentForm from '../studentForm/studentForm';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'students.html'
})
export default class StudentsList {

  students: any = null;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://localhost:8080/students').map(res => res.json()).subscribe(data => {
      this.students = data;
    });
  }

  studentSelected(student: any) {
    this.navCtrl.push(StudentDetail,{
      student: student
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
