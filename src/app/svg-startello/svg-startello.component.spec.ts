import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgStartelloComponent } from './svg-startello.component';

describe('SvgStartelloComponent', () => {
  let component: SvgStartelloComponent;
  let fixture: ComponentFixture<SvgStartelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgStartelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgStartelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
