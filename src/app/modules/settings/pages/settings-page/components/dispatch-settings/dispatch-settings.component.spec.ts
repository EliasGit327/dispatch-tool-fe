import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchSettingsComponent } from './dispatch-settings.component';

describe('DispatchSettingsComponent', () => {
  let component: DispatchSettingsComponent;
  let fixture: ComponentFixture<DispatchSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
