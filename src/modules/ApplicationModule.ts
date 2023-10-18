import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { CommonModule } from "./CommonModule";
import { DynamicModule } from "./DynamicModule";

@Module({
    imports: [
        DynamicModule,
        CommonModule,
        RouterModule.register([
            {
                path: "special",
                module: CommonModule,
            },
        ]),
    ],
})
export class ApplicationModule {}
