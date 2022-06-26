import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createNewClient() {
    this.router.navigate(['/', 'createClient']);    
  }
}
