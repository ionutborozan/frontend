import {TestBed} from '@angular/core/testing';

import {NotificationPageService} from './notification-page.service';

describe('NotificationPageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NotificationPageService = TestBed.get(NotificationPageService);
        expect(service).toBeTruthy();
    });
});
