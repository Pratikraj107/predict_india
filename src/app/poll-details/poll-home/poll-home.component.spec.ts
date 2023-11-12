import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollHomeComponent } from './poll-home.component';

describe('PollHomeComponent', () => {
  let component: PollHomeComponent;
  let fixture: ComponentFixture<PollHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
