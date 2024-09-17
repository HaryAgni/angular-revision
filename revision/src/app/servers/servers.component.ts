import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:"./servers.component.html",
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server created'
  serverName="Server Name";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

}