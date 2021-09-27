"use strict";

import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    constructor(serverEndpoint, username, password, casChallenge) {
        await openSession(serverEndpoint, username, password, casChallenge).then(e => {
            e = curSession;
            console.log(curSession);
        });
    }
    _serverEndPoint;
    get serverEndpoint() {
        return this._serverEndPoint;
    }

    async openSession(serverEndpoint, username, password, casChallenge) {
        serverEndpoint = this._serverEndPoint;
        return await pronote.login(serverEndpoint, username, password, casChallenge);
    }
}