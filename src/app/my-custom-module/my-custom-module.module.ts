import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';



@NgModule({
  declarations: [MyCustomDirectiveDirective, MyCustomComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyCustomComponentComponent
  ]
})
export class MyCustomModuleModule { }
