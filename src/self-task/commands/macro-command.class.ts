import { SendCommand } from './command.interface';

export class SendMacroCommand implements SendCommand {
    constructor(private commands: Array<SendCommand>) {}

    execute(): void {
        this.commands.forEach(command => command.execute());
    }
}
