import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReqDialogComponent } from './create-req-dialog.component';

describe('CreateReqDialogComponent', () => {
  let component: CreateReqDialogComponent;
  let fixture: ComponentFixture<CreateReqDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReqDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
