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
    
    console.log(session.user.name); // Affiche le nom de l'élève
    console.log(session.user.studentClass.name); // Affiche la classe de l'élève
    
    const timetable = await session.timetable(); // Récupérer l'emploi du temps d'aujourd'hui
    const marks = await session.marks(); // Récupérer les notes du trimestre
    
    console.log(`L'élève a ${timetable.length} cours aujourd'hui`); 
    console.log(`et a pour l'instant une moyenne de ${marks.averages.student} ce trimestre.`);
    
    // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences', 
    // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.

    notion.getNotionPageBlock("b08c5a1a18de40e6ba783b8decb5cfa6").then(r => console.log(r));
}


main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});