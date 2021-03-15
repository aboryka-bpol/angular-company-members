import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { TeamComponent } from './team.component';

@NgModule({
    declarations: [
        TeamComponent,
        TeamMembersComponent,
        TeamMemberComponent
    ],
    imports: [CommonModule]
})
export class TeamModule {}
