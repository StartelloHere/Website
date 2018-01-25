import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyBodyComponent } from './calendly-body.component';

describe('CalendlyBodyComponent', () => {
  let component: CalendlyBodyComponent;
  let fixture: ComponentFixture<CalendlyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendlyBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendlyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
