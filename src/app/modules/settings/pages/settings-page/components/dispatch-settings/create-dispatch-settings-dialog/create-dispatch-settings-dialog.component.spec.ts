import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDispatchSettingsDialogComponent } from './create-dispatch-settings-dialog.component';

describe('CreateDispatchSettingsDialogComponent', () => {
  let component: CreateDispatchSettingsDialogComponent;
  let fixture: ComponentFixture<CreateDispatchSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDispatchSettingsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDispatchSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
