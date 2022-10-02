import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthLayoutComponent } from './unauth-layout.component';

describe('UnauthLayoutComponent', () => {
  let component: UnauthLayoutComponent;
  let fixture: ComponentFixture<UnauthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
