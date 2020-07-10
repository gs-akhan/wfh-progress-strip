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
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NotificationComponent } from './notification/notification.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ModalComponent } from './modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LayoutComponent,
    MenuComponent,
    DropdownComponent,
    StepsComponent,
    AutocompleteComponent,
    DatepickerComponent,
    CardComponent,
    ListComponent,
    NotificationComponent,
    ModalComponent
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
    NzSpaceModule,
    NzStepsModule,
    NzAutocompleteModule,
    FormsModule,
    NzDatePickerModule,
    NzCardModule,
    NzListModule,
    NzMessageModule,
    NzNotificationModule,
    NzModalModule
  ],
  providers: [NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
