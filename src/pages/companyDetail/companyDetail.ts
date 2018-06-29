import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import CompanyForm from "../companyForm/companyForm";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ToastController } from "ionic-angular";

@Component({
  templateUrl: "companyDetail.html"
})
export default class CompanyDetail {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private toastCtrl: ToastController
  ) {}

  company = this.navParams.data.company;

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

  openCompanyForm(company: any) {
    this.navCtrl.push(CompanyForm, {
      title: "Edit",
      header: "Update Details",
      company: company
    });
  }

  deleteCompany() {
    this.http
      .delete(`http://localhost:8080/unregisterCompany/${this.company._id}`)
      .subscribe(data => console.log(data));
    this.presentToast(`A company named ${this.company.name} is deleted.`);
    this.navCtrl.pop();
  }
}
