import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { WhatIdoComponent } from './what-ido/what-ido.component';

const routes: Routes = [
  {path:"", component:HomeComponent , pathMatch:"full"},
  {path:"About", component:AboutComponent},
  {path:"WhatIDo", component:WhatIdoComponent},
  {path:"Resume", component:ResumeComponent},
  {path:"Portfolio", component:PortfolioComponent},
  {path:"Client", component:TestmonialComponent},
  {path:"Contact", component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
