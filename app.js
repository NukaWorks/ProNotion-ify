import pronote from "@dorian-eydoux/pronote-api";
import Notion from "./common/notion/Notion.js";
import fs from "fs";
const settings = JSON.parse(fs.readFileSync("./settings.json"));


const notion = new Notion(settings.notion.integration_token);
const url = settings.pronote.endpoint_url;
const username = settings.pronote.username;
const password = settings.pronote.password;
const casChallenge = settings.pronote.cas;



async function main() {
    const session = await pronote.login(url, username, password, casChallenge);
    let currentDate = new Date();
    session.homeworks(new Date(currentDate.getFullYear(), 8, 1), currentDate).then(r => console.log(r));
}


main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});