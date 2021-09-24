import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    constructor(serverEndpoint, username, password, casChallenge) {

    }


}

async function openSession(serverEndpoint, username, password, casChallenge) {
    return await pronote.login(serverEndpoint, username, password, casChallenge);
}

