import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReqDialogComponent } from './edit-req-dialog.component';

describe('EditReqDialogComponent', () => {
  let component: EditReqDialogComponent;
  let fixture: ComponentFixture<EditReqDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReqDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
