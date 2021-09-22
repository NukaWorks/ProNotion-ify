import pronote from "@dorian-eydoux/pronote-api";

export default class PronoteClient {
    constructor(serverEndpoint, username, password, casChallenge) {
        let clientSession;
        pronote.login(serverEndpoint, username, password, casChallenge)
        .then(res => {
            res = clientSession;
        }).catch(err => console.log(err));

        console.log(clientSession);
    }
}