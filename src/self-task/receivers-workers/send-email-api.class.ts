import { SendApi } from './send-api.interface';

export class SendEmailApi implements SendApi {
    url: string;

    constructor(urlParam: string) {
        this.url = urlParam;
    }
    send() {
        console.log(`Email отправлен на роут ${this.url}`);
    }
}
