import { TestBed } from '@angular/core/testing';

import { TeamMembersResolverService } from './team-members-resolver.service';

describe('TeamMembersResolverService', () => {
  let service: TeamMembersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMembersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
