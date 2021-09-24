"use strict";

import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
<<<<<<< Updated upstream
    constructor(serverEndpoint, username, password, casChallenge) {
        await openSession(serverEndpoint, username, password, casChallenge).then(e => {
            e = curSession;
            console.log(curSession);
        });
=======
    _serverEndPoint;
    get serverEndpoint() {
        return this._serverEndPoint;
    }
    async openSession(serverEndpoint, username, password, casChallenge) {
        serverEndpoint = this._serverEndPoint;


        return await pronote.login(serverEndpoint, username, password, casChallenge);
>>>>>>> Stashed changes
    }
}

<<<<<<< Updated upstream
async function openSession(serverEndpoint, username, password, casChallenge) {
    return await pronote.login(serverEndpoint, username, password, casChallenge);
}
=======


>>>>>>> Stashed changes
