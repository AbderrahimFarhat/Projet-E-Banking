import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agent-form',
  templateUrl: './create-agent-form.component.html',
  styleUrls: ['./create-agent-form.component.css']
})
export class CreateAgentFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
