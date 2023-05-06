import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
  @ViewChild('heading', { static: true }) header: ElementRef<HTMLDivElement>;
  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef<HTMLParagraphElement>;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('On Init called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('Do Check called');
  }

  ngAfterContentInit(): void {
    console.log('After Content Init called');
    console.log(
      'Text content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked called');
  }

  ngAfterViewInit(): void {
    console.log('After View Init called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked called');
  }

  ngOnDestroy(): void {
    console.log('On Destroy called');
  }
}
