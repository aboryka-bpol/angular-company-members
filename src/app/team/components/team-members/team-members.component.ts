import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  @Input() members: Member[];
  constructor() { }

  ngOnInit(): void {
  }

}
