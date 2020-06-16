import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { DropdownComponent } from './dropdown/dropdown.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
