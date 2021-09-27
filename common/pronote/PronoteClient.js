"use strict";

import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    
    
    constructor(serverEndpoint, username, password, casChallenge) {
        this.curSession = openSession(serverEndpoint, username, password, casChallenge);
        return this.curSession;
    }

    serverEndPoint;

    get serverEndPoint() {
        return this.serverEndPoint;
    }

   
}

async openSession(serverEndpoint, username, password, casChallenge) {
    serverEndpoint = this.serverEndPoint;
    return pronote.login(serverEndpoint, username, password, casChallenge);
}