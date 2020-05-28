import {TestBed} from '@angular/core/testing';

import {CameraPageService} from './camera-page.service';

describe('CameraPageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CameraPageService = TestBed.get(CameraPageService);
        expect(service).toBeTruthy();
    });
});
