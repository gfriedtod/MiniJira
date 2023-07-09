import { TestBed } from '@angular/core/testing';

import { ManageTasksService } from './manage-tasks.service';

describe('ManageTasksService', () => {
  let service: ManageTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
