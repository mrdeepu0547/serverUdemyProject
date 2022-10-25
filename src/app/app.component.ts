import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serverUdemyProject';
  serverElements = [ {type:"server", content:"test server", name: "test server" }];


}
