import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None //Ignora a Encapsulation e aplica o estilo a todos!
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type?: string;
    name?: string;
    content?: string;
  } = {};
  @Input() name: string = '';

  //1
  constructor() {
    console.log('Constructor called!');
  }

  //3
  //The only hook that receives an argument!
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  //2
  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  //4
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  //5
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  //6
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  //7
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  //8
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  //9
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
