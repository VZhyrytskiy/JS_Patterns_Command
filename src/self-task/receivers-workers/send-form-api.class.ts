import { SendApi } from './send-api.interface';

export class SendFormApi implements SendApi {
    url: string;

    constructor(urlParam: string) {
        this.url = urlParam;
    }
    send() {
        console.log(`Форма отправлена на роут ${this.url}`);
    }
}
