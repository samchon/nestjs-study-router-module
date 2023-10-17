import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { ApplicationModule } from "../../src/modules/ApplicationModule";

const main = async () => {
    const app: INestApplication = await NestFactory.create(ApplicationModule);
    const d = app as any;

    const dynamic = [...d.container.dynamicModulesMetadata.values()].find(
        (d) =>
            Array.isArray(d.providers) &&
            d.providers.every(
                (p: any) =>
                    typeof p.provide === "symbol" &&
                    Array.isArray(p.useValue) &&
                    p.useValue.every(
                        (u: any) =>
                            typeof u.path === "string" &&
                            typeof u.module === "function",
                    ),
            ),
    );
    for (const p of dynamic.providers)
        for (const v of p.useValue) console.log(v.path, v.children);
};
main().catch((exp) => {
    console.error(exp);
    process.exit(1);
});
