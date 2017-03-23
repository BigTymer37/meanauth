import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  card: Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getCard().subscribe(dashboard => {
      this.card = dashboard.card;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
