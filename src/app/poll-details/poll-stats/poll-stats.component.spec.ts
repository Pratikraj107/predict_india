import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollStatsComponent } from './poll-stats.component';

describe('PollStatsComponent', () => {
  let component: PollStatsComponent;
  let fixture: ComponentFixture<PollStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
