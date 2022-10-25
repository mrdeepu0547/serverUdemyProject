import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated= new EventEmitter<{serverContent: string, serverName: string}>();
 @Output() bluePrintCreated=new EventEmitter<{serverContent: string, serverName: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onAddServer(){
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  onAddBluePrint(){
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}


