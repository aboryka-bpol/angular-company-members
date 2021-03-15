import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamRoutingModule } from './team/team-routing.module';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
