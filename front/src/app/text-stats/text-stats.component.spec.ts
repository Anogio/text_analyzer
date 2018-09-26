import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStatsComponent } from './text-stats.component';

describe('TextStatsComponent', () => {
  let component: TextStatsComponent;
  let fixture: ComponentFixture<TextStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
