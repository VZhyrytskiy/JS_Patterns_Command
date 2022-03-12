import { TV, Volume } from '../receiver-workers';

export class SuperPult {
    commandsHistory: Array<string> = [];

    constructor(public tv: TV, public volume: Volume) {

    }

    switchOnTV(): void {
        this.tv.on();
        this.commandsHistory.push('tv.on/off');
    }

    switchOffTV(): void {
        this.tv.off();
        this.commandsHistory.push('tv.off/on');
    }

    raiseVolume(): void {
        this.volume.raiseLevel();
        this.commandsHistory.push('volume.raiseLevel/dropLevel');
    }

    dropVolume(): void {
        this.volume.dropLevel();
        this.commandsHistory.push('volume.dropLevel/raiseLevel');
    }

    pressUndoButton() {
        if (this.commandsHistory.length > 0) {
            const undoCommand = this.commandsHistory.pop();
            const [obj, commands] = undoCommand!.split('.');
            const [, command] = commands.split('/');
            this[obj][command]();
        }
    }

}