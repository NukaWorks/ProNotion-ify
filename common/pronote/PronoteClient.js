"use strict";

import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    curSession;
    serverEndPoint;
    
    constructor(_endpoint, username, password, casChallenge) {
        _endpoint = this.serverEndPoint;
        console.log(casChallenge);
        this.curSession = openSession(this.serverEndPoint, username, password, casChallenge);
        return this.curSession;
    }

    get serverEndPoint() {
        return this.serverEndPoint;
    }   
}

async function openSession(endpoint, username, password, casChallenge) {
    return await pronote.login(endpoint, username, password, casChallenge);
}