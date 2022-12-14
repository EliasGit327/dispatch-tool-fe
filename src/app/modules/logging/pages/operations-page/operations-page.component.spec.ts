import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsPageComponent } from './operations-page.component';

describe('OperationsPageComponent', () => {
  let component: OperationsPageComponent;
  let fixture: ComponentFixture<OperationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
