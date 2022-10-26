import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
  @Input() element!: { type: string; content: string; name: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
