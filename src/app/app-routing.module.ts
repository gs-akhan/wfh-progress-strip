import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [{
  path: "layout",
  component: LayoutComponent
},{
  path: "button",
  component: ButtonComponent
},{
  path: "menu",
  component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
