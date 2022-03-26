import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None //Ignora a Encapsulation e aplica o estilo a todos!
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type?: string;
    name?: string;
    content?: string;
  } = {};

  constructor() { }

  ngOnInit(): void {
  }

}
