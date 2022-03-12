import { MarketingExpert, SoftwareEngineer, SoftwareTestingEngineer } from "../receivers-workers";

export class SuperManager {

    constructor(
        public softwareEnginner: SoftwareEngineer,
        public softwareTestingEngineer: SoftwareTestingEngineer,
        public marketingExpert: MarketingExpert
    ) { }

    startCoddig(): this {
        this.softwareEnginner.startCodding();
        return this;
    }

    stopCodding(): this {
        this.softwareEnginner.stopCodding();
        return this;
    }

    startTesting(): this {
        this.softwareTestingEngineer.startTesting();
        return this;
    }

    stopTesting(): this {
        this.softwareTestingEngineer.stopTesting();
        return this;
    }

    startAdvertizing(): this {
        this.marketingExpert.startAdvertizing();
        return this;
    }

    stopAdvertizing(): this {
        this.marketingExpert.stopAdvertizing();
        return this;
    }


    startProject(): this {
        this.startCoddig();
        this.startTesting();
        this.startAdvertizing();
        return this;
    }

    stopProject(): this {
        this.stopCodding();
        this.stopTesting();
        this.stopAdvertizing();
        return this;
    }
}