import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCustomModuleModule } from './my-custom-module/my-custom-module.module';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { MenuRoutingModule } from './menu-routing/menu-routing.module';

const appRoutes:Routes = [
    { path: '', component: DefaultComponent },
    { path: 'home', loadChildren: './menu-routing.module#AppModule' },
    { path: 'projects', loadChildren: './menu-routing.module#AppModule' },
    { path: 'services', loadChildren: './menu-routing.module#AppModule' },
    { path: 'contact', loadChildren: './menu-routing.module#AppModule' },
    { path: 'about', loadChildren: './menu-routing.module#AppModule' }
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    MyCustomModuleModule,
    MenuRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
