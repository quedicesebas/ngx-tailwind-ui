import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetModalContentComponent } from './bottom-sheet-modal-content.component';

describe('BottomSheetModalContentComponent', () => {
  let component: BottomSheetModalContentComponent;
  let fixture: ComponentFixture<BottomSheetModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetModalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
