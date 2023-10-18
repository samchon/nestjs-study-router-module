import { Module } from "@nestjs/common";

// import { RouterModule } from "@nestjs/core";
import { BbsArticleCommentsController } from "../controllers/BbsArticleCommentsController";
import { BbsArticlesController } from "../controllers/BbsArticlesController";

// import { DynamicModule } from "./DynamicModule";

@Module({
    controllers: [BbsArticlesController, BbsArticleCommentsController],
    imports: [
        // DynamicModule,
        // RouterModule.register([
        //     {
        //         path: "invert",
        //         module: DynamicModule,
        //     },
        // ]),
    ],
})
export class BbsModule {}
