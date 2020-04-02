import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rocket1Component } from './rocket1.component';

describe('Rocket1Component', () => {
  let component: Rocket1Component;
  let fixture: ComponentFixture<Rocket1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rocket1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rocket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
