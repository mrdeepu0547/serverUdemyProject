import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serverUdemyProject';
  serverElements = [ {type:"server", content:"test server", name: "test server" }];
  onServerAdded(serverData:{serverContent: string, serverName: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData:{serverContent: string, serverName: string}){
    this.serverElements.push({
      type: 'server',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}
