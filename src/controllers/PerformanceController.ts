import core from "@nestia/core";
import { Controller } from "@nestjs/common";

import { IPerformance } from "../api/structures/bbs/IPerformance";

@Controller("performance")
export class PerformanceController {
    @core.TypedRoute.Get()
    public async get(): Promise<IPerformance> {
        return {
            cpu: process.cpuUsage(),
            memory: process.memoryUsage(),
            resource: process.resourceUsage(),
        };
    }
}
