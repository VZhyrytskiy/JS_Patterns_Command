import { SendApi } from './send-api.interface';

export class SendSmsApi implements SendApi {
    url: string;

    constructor(urlParam: string) {
        this.url = urlParam;
    }
    send() {
        console.log(`Смс отправлено на роут ${this.url}`);
    }
}
