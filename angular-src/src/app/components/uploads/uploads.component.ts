import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  cardname: String;
  cardinfo: String;
  attribute: String;
  imagename: String;


  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }


  ngOnInit() {
  }


  onUploadsSubmit(){
    const card = {
    cardname: this.cardname,
    cardinfo: this.cardinfo,
    attribute: this.attribute,
    imagename: this.imagename
    }
    //Required Fields
    if(!this.validateService.validateCard(card)){
      this.flashMessage.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }
    //Register User
    this.authService.uploadCard(card).subscribe(data =>{
      if(data.success){
      this.flashMessage.show('Registration Successful', {cssClass:'alert-success', timeout: 3000});
      this.router.navigate(['/uploads']);
      } else {
        this.flashMessage.show('Registration Failed', {cssClass:'alert-danger', timeout: 3000})
        this.router.navigate(['/uploads']);
      }
    });
  }
}
