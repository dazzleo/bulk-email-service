import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { BulkEmailServiceSharedModule, UserRouteAccessService } from './shared';
import { BulkEmailServiceAppRoutingModule} from './app-routing.module';
import { BulkEmailServiceHomeModule } from './home/home.module';
import { BulkEmailServiceAdminModule } from './admin/admin.module';
import { BulkEmailServiceAccountModule } from './account/account.module';
import { BulkEmailServiceEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BulkEmailServiceAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BulkEmailServiceSharedModule,
        BulkEmailServiceHomeModule,
        BulkEmailServiceAdminModule,
        BulkEmailServiceAccountModule,
        BulkEmailServiceEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BulkEmailServiceAppModule {}
