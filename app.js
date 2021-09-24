import Notion from "./common/notion/NotionClient.js";
import PronoteClient from "./common/pronote/PronoteClient.js";
import fs from "fs";
const settings = JSON.parse(fs.readFileSync("./settings.json"));


const notion = new Notion(settings.notion.integration_token);
const url = settings.pronote.endpoint_url;
const username = settings.pronote.username;
const password = settings.pronote.password;
const casChallenge = settings.pronote.cas;



async function main() {
    // const session = await pronote.login(url, username, password, casChallenge);
    
   /*  session.homeworks(new Date(settings.calendar.from), new Date(settings.calendar.to)).then(r => 
        r.forEach(work => {
            console.log(`COURS : ${work.subject}, DESCRIPTION : ${work.description}`);
        })); */

    const pronote = new PronoteClient(url, username, password, casChallenge);
    console.log(pronote);
    
}


main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});