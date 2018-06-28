import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import StudentsList from '../pages/students/students';
import CompaniesList from '../pages/companies/companies';
import StudentDetail from '../pages/studentDetail/studentDetail';
import StudentForm from '../pages/studentForm/studentForm';
import CompanyDetail from '../pages/companyDetail/companyDetail';
import CompanyForm from '../pages/companyForm/companyForm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentsList,
    CompaniesList,
    StudentDetail,
    StudentForm,
    CompanyDetail,
    CompanyForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentsList,
    CompaniesList,
    StudentDetail,
    StudentForm,
    CompanyDetail,
    CompanyForm
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
