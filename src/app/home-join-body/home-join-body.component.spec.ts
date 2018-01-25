import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJoinBodyComponent } from './home-join-body.component';

describe('HomeJoinBodyComponent', () => {
  let component: HomeJoinBodyComponent;
  let fixture: ComponentFixture<HomeJoinBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJoinBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJoinBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
