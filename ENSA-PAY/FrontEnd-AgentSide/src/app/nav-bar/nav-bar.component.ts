import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
    this.authService.setIsPwdChanged(false);
    this.router.navigate(['/', 'login']);
    
  }
  faArrowRightFromBracket = faArrowRightFromBracket;
}
