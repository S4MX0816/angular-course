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
import { ServerElement } from './server-element.model';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
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
  @Input('srvElement') element: ServerElement = {} as ServerElement;
  @Input() name: string;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('On Init called');
  }

  ngDoCheck(): void {
    console.log('Do Check called');
  }

  ngAfterContentInit(): void {
    console.log('After Content Init called');
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked called');
  }

  ngAfterViewInit(): void {
    console.log('After View Init called');
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked called');
  }

  ngOnDestroy(): void {
    console.log('On Destroy called');
  }
}
