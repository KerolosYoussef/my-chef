import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'

})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpened = false;
  @HostListener('click', ['$event']) toggleOpen(event: Event) {
    this.isOpened = this.elementRf.nativeElement.contains(event.target) ? !this.isOpened : false;
  }
  constructor(private elementRf: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  
}
