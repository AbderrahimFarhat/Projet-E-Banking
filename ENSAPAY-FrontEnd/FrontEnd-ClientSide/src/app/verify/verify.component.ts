import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  localForm:FormGroup;
  constructor(private fb:FormBuilder,private clientService:ClientService,private router:Router,private popup:NgToastService,private route:ActivatedRoute) {
    this.localForm = this.fb.group({
      code:new FormControl('',Validators.compose([Validators.required]))
    });
    
   }

  ngOnInit(): void {
  }
  resend(){
    this.clientService.resend(this.route.snapshot.queryParamMap.get('id')!).subscribe(result=>{
      this.popup.info({detail:"Success",summary:"Verification code was sent successfully",duration:2500});
    },
    error=>{        
      this.popup.error({detail:"Error",summary:"Something Went wrong",duration:2500}); 
    }
    )
  }
  submit(){
    if(this.localForm.valid){
      this.clientService.verifyBill(this.route.snapshot.queryParamMap.get('id')!,this.localForm.get("code")?.value).subscribe(result=>{
        console.log(result);
        this.clientService.billToShow=result;
        this.router.navigate(["/payment/bill"]);
        this.popup.success({detail:"Success",summary:"Transaction passed successfully",duration:2500});
        
      },
      error=>{        
        this.popup.error({detail:"Error",summary:error.error.message,duration:2500});
        
      }
      )
    }else{
      this.popup.error({detail:"Error",summary:"Verification code required",duration:2500});
    }
  }
}
