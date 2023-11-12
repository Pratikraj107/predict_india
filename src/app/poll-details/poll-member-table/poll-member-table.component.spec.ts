import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollMemberTableComponent } from './poll-member-table.component';

describe('PollMemberTableComponent', () => {
  let component: PollMemberTableComponent;
  let fixture: ComponentFixture<PollMemberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollMemberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
