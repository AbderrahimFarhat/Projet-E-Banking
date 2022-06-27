import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../model/client';
import { faTrashCan,faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests:Client[] = [];
  requestClicked:Client | undefined;
  faTrashCan = faTrashCan;
  faSquareCheck = faSquareCheck;
  constructor(private router:Router,private clientService:ClientService) {
    this.clientService.getRequest().subscribe(result =>{
      this.requests=result;
      
    })
  }

  ngOnInit(): void {
  }
  accept(id:any){
    this.clientService.acceptOrRefuseRequest(id,true).subscribe(data=>{
      this.removeFromArray(id);
    })
    
  }

  delete(id:number){
    this.clientService.acceptOrRefuseRequest(id,false).subscribe(data=>{
      this.removeFromArray(id);
    })
  }
  
  removeFromArray(id:number){
    this.requests.forEach((client,index) => {
      if(client.id==id){
        this.requests.splice(index,1);
      }
    });
  }

}
