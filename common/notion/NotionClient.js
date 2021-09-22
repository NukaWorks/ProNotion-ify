import { Client } from "@notionhq/client";

export default class Notion extends Client {
    constructor(token) {
        super({ auth: token });
    }

    async getNotionPageBlock(pageBlock) {
        return await this.blocks.retrieve({ block_id: pageBlock});
    }
}