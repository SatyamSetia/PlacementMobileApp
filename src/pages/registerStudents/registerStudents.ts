import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from "ionic-angular";
import { ROOT_URL } from '../../utils';

@Component({
  templateUrl: 'registerStudents.html'
})
export default class RegisterStudents {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private toastCtrl: ToastController
   ) {}

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

  students = this.navParams.data.students;
  company = this.navParams.data.company;

  register(student: any){
    this.http.put(`${ROOT_URL}/registerStudent/${student._id}`,{
      companyId: this.company._id
    }).subscribe(data => console.log(data));
    this.presentToast(`${student.name} is registered for ${this.company.name}`);
    this.students = this.students.filter(st => st._id!==student._id);
  }

}
