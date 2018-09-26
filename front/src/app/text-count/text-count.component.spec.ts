import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCountComponent } from './text-count.component';

describe('TextCountComponent', () => {
  let component: TextCountComponent;
  let fixture: ComponentFixture<TextCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
