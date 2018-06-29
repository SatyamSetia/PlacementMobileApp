import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";
import { NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
	templateUrl: "studentForm.html"
})
export default class StudentForm {
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		private toastCtrl: ToastController
	) {}

	title = this.navParams.data.title;
	header = this.navParams.data.header;
	editStudent = this.navParams.data.student;

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

	student = this.title === "Create"?{
		name: null,
		department: null,
		rollNo: null,
		cgpa: null
	}:this.editStudent;

	onNameChange(e: any) {
		this.student.name = e.target.value;
	}

	onDeptChange(e: any) {
		this.student.department = e.target.value;
	}

	onRollChange(e: any) {
		this.student.rollNo = e.target.value;
	}

	onCgpaChange(e: any) {
		this.student.cgpa = e.target.value;
	}

	handleSave() {
		this.student.rollNo += "";
		this.student.cgpa += "";
		if (this.title === "Create") {
			if (this.validate()) {
				this.http.post('http://localhost:8080/addStudent',this.student).subscribe(data => console.log(data));
				this.presentToast(`A new student ${this.student.name} is registered.`);
				this.navCtrl.pop();
			}
		} else {
			if(this.validate()) {
				this.http.put(`http://localhost:8080/editStudent/${this.editStudent._id}`, this.student).subscribe(data => console.log(data));
				this.presentToast(`A student named ${this.student.name} is updated.`);
				this.navCtrl.pop();
			}
		}
	}

	validate() {
		if (this.student.name === null) {
			this.presentToast('Name cannot be empty');
			return false;
		} else if (this.student.department === null) {
			this.presentToast('Branch cannot be empty');
			return false;
		} else if (this.student.rollNo === null) {
			this.presentToast('Roll No cannot be empty');
			return false;
		} else if(isNaN(this.student.rollNo) || this.student.rollNo<1){
			this.presentToast('Invalid Roll number');
			return false;
		} else if (this.student.cgpa === null) {
			this.presentToast('CGPA cannot be empty');
			return false;
		} else if(isNaN(this.student.cgpa) || this.student.cgpa<0){
			this.presentToast('Invalid CGPA');
			return false;
		} else {
			return true;
		}
	}
}
