import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() member: Member;
  @Input() imageSize: string;
  @Input() imageContainerClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
