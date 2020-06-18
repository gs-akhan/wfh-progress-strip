import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuComponent } from './menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { StepsComponent } from './steps/steps.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LayoutComponent,
    MenuComponent,
    DropdownComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    ScrollingModule,
    NzMenuModule,
    NzDropDownModule,
    NzSpaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
