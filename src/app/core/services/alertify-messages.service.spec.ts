import { TestBed } from '@angular/core/testing';

import { AlertifyMessagesService } from './alertify-messages.service';

describe('AlertifyMessagesService', () => {
  let service: AlertifyMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
