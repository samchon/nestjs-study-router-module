import { Module } from "@nestjs/common";

import { BbsArticleCommentsController } from "../controllers/BbsArticleCommentsController";

@Module({
    controllers: [BbsArticleCommentsController],
})
export class BbsArticleCommentModule {}
