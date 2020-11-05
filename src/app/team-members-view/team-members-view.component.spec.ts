import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersViewComponent } from './team-members-view.component';

describe('TeamMembersViewComponent', () => {
  let component: TeamMembersViewComponent;
  let fixture: ComponentFixture<TeamMembersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
