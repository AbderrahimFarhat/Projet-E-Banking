import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,private clientService:ClientService,private authService:AuthService,private popup:NgToastService) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
    this.authService.setIsPwdChanged(false);
    this.router.navigate(['/', 'login']);
    
  }
  generateUnpaid(){
    this.clientService.generateUnpaid().subscribe(result=>{
      console.log("Unpaid generated successfully");
      this.popup.success({detail:"Success",summary:"Unpaid generated successfully",duration:2500});
      
    })
  }
  faArrowRightFromBracket = faArrowRightFromBracket;
}
