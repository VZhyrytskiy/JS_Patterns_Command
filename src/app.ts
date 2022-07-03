import { SuperManager, MarketingExpert, SoftwareEngineer, SoftwareTestingEngineer } from './task1';
import { TV, Volume, SuperPult } from './task2';
import {SendEmailApi, SendFormApi, SendSmsApi} from "./self-task/receivers-workers";
import {SendCommand, SendEmailCommand, SendFormCommand, SendMacroCommand, SendSmsCommand} from "./self-task/commands";
import {BankAgent} from "./self-task/invoker";

/**
 * OLD
 */
{
    const softwareEngineer = new SoftwareEngineer();
    const softwareTestingEngineer = new SoftwareTestingEngineer();
    const marketingExpert = new MarketingExpert();

    const superManager = new SuperManager(softwareEngineer, softwareTestingEngineer, marketingExpert);
    // superManager.startProject();
    // superManager.stopAdvertizing();
}

/**
 * NEW
 */
{
    
}

/**
 * OLD
 */
{
    const tv = new TV();
    const volume = new Volume();
    const pult = new SuperPult(tv, volume);

    // pult.switchOnTV();

    // pult.raiseVolume();
    // pult.raiseVolume();
    // pult.raiseVolume();

    // pult.pressUndoButton();
    // pult.pressUndoButton();
    // pult.pressUndoButton();
    // pult.pressUndoButton();
}

/**
 * NEW
 */
{
    
}

/**
 * NEW 3
 */

{
    const emailApi = new SendEmailApi('api/emails');
    const formApi = new SendFormApi('api/emails');
    const smsApi = new SendSmsApi('api/emails');

    const commands: Array<SendCommand> = [
        new SendEmailCommand(emailApi),
        new SendFormCommand(formApi),
        new SendSmsCommand(smsApi),
    ];

    const agent = new BankAgent();
    agent.setCommand(new SendMacroCommand(commands));
    agent.sendItem();
}