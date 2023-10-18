import { INestApplication } from "@nestjs/common";
import { MODULE_PATH } from "@nestjs/common/constants";
import { NestContainer, NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/core/injector/module";

import { ApplicationModule } from "../../src/modules/ApplicationModule";

const main = async () => {
    const app: INestApplication = await NestFactory.create(ApplicationModule);
    await app.setGlobalPrefix("api/v1");

    const container: NestContainer = (app as any).container as NestContainer;
    const modules: Module[] = [...container.getModules().values()];

    for (const m of modules.filter((m) => !!m.controllers.size)) {
        console.log({
            name: m.name,
            paths:
                Reflect.getMetadata(
                    MODULE_PATH + container.getModules().applicationId,
                    m.metatype,
                ) ?? Reflect.getMetadata(MODULE_PATH, m.metatype),
            metatype: m.metatype,
            controllers: [...m.controllers.keys()],
        });
    }
    await app.listen(8080);
};
main().catch((exp) => {
    console.error(exp);
    process.exit(1);
});
