/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { BulkEmailServiceTestModule } from '../../../test.module';
import { EmailDialogComponent } from '../../../../../../main/webapp/app/entities/email/email-dialog.component';
import { EmailService } from '../../../../../../main/webapp/app/entities/email/email.service';
import { Email } from '../../../../../../main/webapp/app/entities/email/email.model';

describe('Component Tests', () => {

    describe('Email Management Dialog Component', () => {
        let comp: EmailDialogComponent;
        let fixture: ComponentFixture<EmailDialogComponent>;
        let service: EmailService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BulkEmailServiceTestModule],
                declarations: [EmailDialogComponent],
                providers: [
                    EmailService
                ]
            })
            .overrideTemplate(EmailDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EmailDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmailService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Email('123');
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.email = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'emailListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Email();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.email = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'emailListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
