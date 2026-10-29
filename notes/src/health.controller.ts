import { Controller, Get } from "palbase/backend";

// What the platform asks before it sends a new version traffic.
@Controller("/health", { auth: false })
export class HealthController {
  @Get("")
  health(): { ok: true } {
    return { ok: true };
  }
}
