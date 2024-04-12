import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBottomSheetModalComponent } from './ngx-bottom-sheet-modal.component';

describe('NgxBottomSheetModalComponent', () => {
  let component: NgxBottomSheetModalComponent;
  let fixture: ComponentFixture<NgxBottomSheetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBottomSheetModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxBottomSheetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
