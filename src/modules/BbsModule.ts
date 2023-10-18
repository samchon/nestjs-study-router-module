import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { BbsArticleCommentModule } from "./BbsArticleCommentModule";
import { BbsArticleModule } from "./BbsArticleModule";
import { CommonModule } from "./CommonModule";

@Module({
    imports: [
        BbsArticleModule,
        BbsArticleCommentModule,
        RouterModule.register([
            {
                path: "again-and-again",
                module: CommonModule,
            },
        ]),
    ],
})
export class BbsModule {}
