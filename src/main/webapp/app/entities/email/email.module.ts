import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BulkEmailServiceSharedModule } from '../../shared';
import {
    EmailService,
    EmailPopupService,
    EmailComponent,
    EmailDetailComponent,
    EmailDialogComponent,
    EmailPopupComponent,
    EmailDeletePopupComponent,
    EmailDeleteDialogComponent,
    emailRoute,
    emailPopupRoute,
} from './';

const ENTITY_STATES = [
    ...emailRoute,
    ...emailPopupRoute,
];

@NgModule({
    imports: [
        BulkEmailServiceSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        EmailComponent,
        EmailDetailComponent,
        EmailDialogComponent,
        EmailDeleteDialogComponent,
        EmailPopupComponent,
        EmailDeletePopupComponent,
    ],
    entryComponents: [
        EmailComponent,
        EmailDialogComponent,
        EmailPopupComponent,
        EmailDeleteDialogComponent,
        EmailDeletePopupComponent,
    ],
    providers: [
        EmailService,
        EmailPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BulkEmailServiceEmailModule {}
