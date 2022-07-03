import { SendCommand } from '../commands';

export class BankAgent {
    command!: SendCommand;

    setCommand(commandParam: SendCommand): void {
        this.command = commandParam;
    }

    sendItem(): this {
        this.command.execute();
        return this;
    }
}
