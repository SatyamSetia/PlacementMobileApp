import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";
import { NavController, NavParams } from "ionic-angular";
import StudentForm from "../studentForm/studentForm";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  templateUrl: "studentDetail.html"
})
export default class StudentDetail {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private toastCtrl: ToastController
  ) {}

  student = this.navParams.data.student;

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

  openStudentForm(student: any) {
    this.navCtrl.push(StudentForm, {
      title: "Edit",
      header: "Update Details",
      student: student
    });
  }

  deleteStudent() {
    this.http.delete(`http://localhost:8080/removeStudent/${this.student._id}`).subscribe(data => console.log(data));
    this.presentToast(`A student named ${this.student.name} is deleted.`);
    this.navCtrl.pop();
  }
}
