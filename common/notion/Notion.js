const { Client } = require("@notionhq/client");

class Notion extends Client {
    constructor(token) {
        super({ auth: token });
    }

    async getNotionPageBlock(pageBlock) {
        return await notion.blocks.retrieve({ block_id: pageBlock});
    }
}

exports.Notion = Notion;