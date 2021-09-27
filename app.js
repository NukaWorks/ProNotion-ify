import Notion from "./common/notion/NotionClient.js";
import PronoteClient from "./common/pronote/PronoteClient.js";
import fs from "fs";
const settings = JSON.parse(fs.readFileSync("./settings.json"));


const notion = new Notion(settings.notion.integration_token);
const url = settings.pronote.endpoint_url;
const username = settings.pronote.username;
const password = settings.pronote.password;
const casChallenge = settings.pronote.cas;


let pronote = await new PronoteClient(url, username, password, casChallenge);
console.log(pronote.serverEndPoint);