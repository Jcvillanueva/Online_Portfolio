import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';


const routes: Routes = [
  {path: 'Homepage', component: HomepageComponent},
  {path: 'Header', component: NavbarHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
