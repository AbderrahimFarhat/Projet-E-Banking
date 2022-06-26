import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-create-agent-form',
  templateUrl: './create-agent-form.component.html',
  styleUrls: ['./create-agent-form.component.css']
})
export class CreateAgentFormComponent implements OnInit {
  public agentForm:FormGroup;
  constructor(private router: Router,private agentService:AgentService,private fb: FormBuilder,private popup:NgToastService) {
    this.agentForm = this.fb.group({
      lastName: new FormControl('',Validators.compose([Validators.required])),
      firstName: new FormControl('',Validators.compose([Validators.required])),
      identityType: new FormControl('',Validators.compose([Validators.required])),
      identityCardNumber: new FormControl('',Validators.compose([Validators.required])),
      username: new FormControl('',Validators.compose([Validators.required])),
      address: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required])),
      confirmEmail: new FormControl('',Validators.compose([Validators.required])),
      phone: new FormControl('',Validators.compose([Validators.required])),
      tradeRegister: new FormControl('',Validators.compose([Validators.required])),
      patentNumber: new FormControl('',Validators.compose([Validators.required])),
      identityCardRecto: new FormControl('',Validators.compose([Validators.required])),
      identityCardVerso: new FormControl('',Validators.compose([Validators.required]))
    });
   }

  ngOnInit(): void {
  }
  addAgent(){
    if(this.agentForm.valid){
      this.agentService.postAgent(this.agentForm.value).subscribe(data => {
        this.router.navigate(['/', 'home']);
        this.popup.success({detail:"Success",summary:"Agent added successfully",duration:2500});
      });
    }else{
      this.popup.error({detail:"Error",summary:"Please fill all fields",duration:2500});
    }
    
  }
}
