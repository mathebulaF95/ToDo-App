import { Component } from '@angular/core';
import { MONTH } from '../../mocks/list.mocks';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  firstname;
  monthList = MONTH;
  add;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.firstname = this.navParams.get("fressy")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  list(){
    this.navCtrl.push('AddTaskPage', {fressy: this.add})
  }

}
