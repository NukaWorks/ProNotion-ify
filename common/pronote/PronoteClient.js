import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    constructor(serverEndpoint, username, password, casChallenge) {
        await openSession(serverEndpoint, username, password, casChallenge).then(e => {
            e = curSession;
            console.log(curSession);
        });
    }
}

async function openSession(serverEndpoint, username, password, casChallenge) {
    return await pronote.login(serverEndpoint, username, password, casChallenge);
}