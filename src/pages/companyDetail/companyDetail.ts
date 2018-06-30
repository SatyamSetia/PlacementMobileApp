import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import CompanyForm from "../companyForm/companyForm";
import RegisterStudents from '../registerStudents/registerStudents';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ToastController } from "ionic-angular";
import { ROOT_URL } from '../../utils';

@Component({
  templateUrl: "companyDetail.html"
})
export default class CompanyDetail {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private toastCtrl: ToastController
  ) {
    this.fetchRegStudents();
    this.fetchAllStudents();
  }

  company = this.navParams.data.company;
  allStudents = [];
  regStudents = [];
  unregStudents = [];

  fetchRegStudents() {
    this.company.students.map(id =>
      this.http
        .get(`${ROOT_URL}/students/${id}`)
        .map(res => res.json())
        .subscribe(data => this.regStudents.push(data[0]))
    );
  }

  fetchAllStudents() {
    this.http
      .get(`${ROOT_URL}/students`)
      .map(res => res.json())
      .subscribe(data => {
        this.allStudents = data;
      });
  }

  getUnregStudents() {
    for(var i=0;i<this.allStudents.length;i++){
      var found = false;
      for(var j=0;j<this.regStudents.length;j++){
        if(this.allStudents[i]._id===this.regStudents[j]._id){
          found = true;
        }
      }
      if(!found){
        this.unregStudents.push(this.allStudents[i]);
      }
    }
  }

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

  openUnregisteredStudents() {
    this.getUnregStudents();
    this.navCtrl.push(RegisterStudents,{
      students: this.unregStudents,
      company: this.company
    })
  }

  openCompanyForm(company: any) {
    this.navCtrl.push(CompanyForm, {
      title: "Edit",
      header: "Update Details",
      company: company
    });
  }

  deleteCompany() {
    this.http
      .delete(`${ROOT_URL}/unregisterCompany/${this.company._id}`)
      .subscribe(data => console.log(data));
    this.presentToast(`A company named ${this.company.name} is deleted.`);
    this.navCtrl.pop();
  }

  unregister(student: any) {
    this.http.put(`${ROOT_URL}/unregisterStudent/${student._id}`,{
      companyId: this.company._id
    }).subscribe(data => console.log(data));
    this.presentToast(`${student.name} is unregistered from ${this.company.name}`);
    this.regStudents = this.regStudents.filter(st => st._id!==student._id);
  }
}
