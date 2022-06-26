import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createNewAgent() {
    this.router.navigate(['/', 'createAgent']);
    
  }
}
