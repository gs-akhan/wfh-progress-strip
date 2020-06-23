import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StepsComponent } from './steps/steps.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';


const routes: Routes = [{
  path: "layout",
  component: LayoutComponent
},{
  path: "button",
  component: ButtonComponent
},{
  path: "menu",
  component: MenuComponent
},{
  path: "dropdown",
  component: DropdownComponent
},{
  path: "steps",
  component: StepsComponent
},{
  path: "autocomplete",
  component: AutocompleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
