import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMembersResolverService } from './services/resolvers/team-members-resolver.service';
import { TeamMembersViewComponent } from './team-members-view/team-members-view.component';

const routes: Routes = [
  {
    path: '',
    component: TeamMembersViewComponent,
    resolve: {
      data: TeamMembersResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
