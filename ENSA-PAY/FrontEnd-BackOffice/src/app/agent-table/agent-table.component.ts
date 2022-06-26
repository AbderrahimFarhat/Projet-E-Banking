import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { Agent } from '../model/agent';

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {

  agents:Agent[] = [];
  constructor(private router:Router,private agentService:AgentService) { }

  ngOnInit(): void {
    this.agentService.getAgents().subscribe(data => {
      console.log(data);
      this.agents=data;
      
    });
  }
}
