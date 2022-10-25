import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  serverCreated= new EventEmitter<{serverContent: string, serverName: string}>();
  bluePrintCreated=new EventEmitter<{serverContent: string, serverName: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
