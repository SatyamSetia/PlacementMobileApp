import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";
import { NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
	templateUrl: "companyForm.html"
})
export default class CompanyForm {
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		private toastCtrl: ToastController
	) {}

	title = this.navParams.data.title;
	header = this.navParams.data.header;
	editCompany = this.navParams.data.company;

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

	company = this.title==='Register Company'?{
		name: null,
		profile: null,
		openings: null
	}:this.editCompany;

	onNameChange(e: any) {
		this.company.name = e.target.value;
	}

	onProfileChange(e: any) {
		this.company.profile = e.target.value;
	}

	onOpeningsChange(e: any) {
		this.company.openings = e.target.value;
	}

	handleSave() {
		if (this.title === "Register Company") {
			if (this.validate()) {
				this.http.post('http://localhost:8080/registerCompany',this.company).subscribe(data => console.log(data));
				this.presentToast(`A new company ${this.company.name} is registered.`);
				this.navCtrl.pop();
			}
		} else {
			// if(this.validate()) {
			// 	this.http.put(`http://localhost:8080/editStudent/${this.editStudent._id}`, this.student).subscribe(data => console.log(data));
			// 	this.presentToast(`A student named ${this.student.name} is updated.`);
			// 	this.navCtrl.pop();
			// }
		}
	}

	validate() {
		if (this.company.name === null) {
			this.presentToast('Name cannot be empty');
			return false;
		} else if (this.company.profile === null) {
			this.presentToast('Profile cannot be empty');
			return false;
		} else if (this.company.openings === null) {
			this.presentToast('Openings cannot be empty');
			return false;
		} else if(isNaN(this.company.openings) || this.company.openings<1){
			this.presentToast('Invalid Openings');
			return false;
		} else {
			return true;
		}
	}
}
