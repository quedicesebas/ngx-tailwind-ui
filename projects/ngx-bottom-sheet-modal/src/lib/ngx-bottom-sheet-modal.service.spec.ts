import { TestBed } from '@angular/core/testing';

import { NgxBottomSheetModalService } from './ngx-bottom-sheet-modal.service';

describe('NgxBottomSheetModalService', () => {
  let service: NgxBottomSheetModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBottomSheetModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
