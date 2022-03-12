import { SuperManager, MarketingExpert, SoftwareEngineer, SoftwareTestingEngineer } from './task1';
import { TV, Volume, SuperPult } from './task2';

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

