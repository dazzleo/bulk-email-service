import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Email } from './email.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class EmailService {

    private resourceUrl = SERVER_API_URL + 'api/emails';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(email: Email): Observable<Email> {
        const copy = this.convert(email);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(email: Email): Observable<Email> {
        const copy = this.convert(email);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: string): Observable<Email> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Email.
     */
    private convertItemFromServer(json: any): Email {
        const entity: Email = Object.assign(new Email(), json);
        entity.dateSent = this.dateUtils
            .convertDateTimeFromServer(json.dateSent);
        return entity;
    }

    /**
     * Convert a Email to a JSON which can be sent to the server.
     */
    private convert(email: Email): Email {
        const copy: Email = Object.assign({}, email);

        copy.dateSent = this.dateUtils.toDate(email.dateSent);
        return copy;
    }
}
