import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

const routes: Routes = [
  {path: 'Homepage', component: HomepageComponent},
  {path: 'Header', component: NavbarHeaderComponent},
  {path: 'HomeBanner', component: HomeBannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
