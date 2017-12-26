import { BaseEntity } from './../../shared';

export const enum Type {
    'HTML',
    'TEXT'
}

export class Email implements BaseEntity {
    constructor(
        public id?: string,
        public from?: string,
        public to?: string,
        public replyTo?: string,
        public dateSent?: any,
        public type?: Type,
        public subject?: string,
    ) {
    }
}
