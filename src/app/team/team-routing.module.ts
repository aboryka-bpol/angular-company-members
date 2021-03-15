import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamResolverService } from './resolvers/team-resolver.service';
import { TeamComponent } from './team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    resolve: {
      data: TeamResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {}
