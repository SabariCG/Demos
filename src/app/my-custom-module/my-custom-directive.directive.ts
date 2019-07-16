import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  private element: HTMLElement;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('Blue');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
  }
  
  constructor(refElementRef:ElementRef) {
    this.element = refElementRef.nativeElement;
    this.element.innerText = "I'm custom directive using in my-custom-component from my custom module.";
    this.element.style.fontSize = "40px";
  }

  private highlight(color:string){
    this.element.style.backgroundColor = color;
  }
}
