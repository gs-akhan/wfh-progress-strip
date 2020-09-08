import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StepsComponent } from './steps/steps.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { ComplexgridComponent } from './complexgrid/complexgrid.component';
import { FieldmapperComponent } from './fieldmapper/fieldmapper.component';
import { Grid1Component } from './grid1/grid1.component';
import { WidgetComponent } from './widget/widget.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [{
  path: "layout",
  component: LayoutComponent
}, {
  path: "button",
  component: ButtonComponent
}, {
  path: "menu",
  component: MenuComponent
}, {
  path: "dropdown",
  component: DropdownComponent
}, {
  path: "steps",
  component: StepsComponent
}, {
  path: "autocomplete",
  component: AutocompleteComponent
}, {
  path: "datepicker",
  component: DatepickerComponent
}, {
  path: "card",
  component: CardComponent
}, {
  path: "list",
  component: ListComponent
}, {
  path: "notification",
  component: NotificationComponent
}, {
  path: "modal",
  component: ModalComponent
},
{
  path: "grid",
  component: ComplexgridComponent
}, {
  path: "fields",
  component: FieldmapperComponent
}, {
  path: "grid1",
  component: Grid1Component
}, {
  path: "widget",
  component: WidgetComponent
}, {
  path: "header",
  component: HeaderComponent
}];
