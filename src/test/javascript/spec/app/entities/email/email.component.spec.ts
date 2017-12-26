/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { BulkEmailServiceTestModule } from '../../../test.module';
import { EmailComponent } from '../../../../../../main/webapp/app/entities/email/email.component';
import { EmailService } from '../../../../../../main/webapp/app/entities/email/email.service';
import { Email } from '../../../../../../main/webapp/app/entities/email/email.model';

describe('Component Tests', () => {

    describe('Email Management Component', () => {
        let comp: EmailComponent;
        let fixture: ComponentFixture<EmailComponent>;
        let service: EmailService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BulkEmailServiceTestModule],
                declarations: [EmailComponent],
                providers: [
                    EmailService
                ]
            })
            .overrideTemplate(EmailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EmailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmailService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Email('123')],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.emails[0]).toEqual(jasmine.objectContaining({id: '123'}));
            });
        });
    });

});
