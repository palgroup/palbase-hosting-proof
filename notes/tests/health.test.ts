// The app's own tests. `bun test ./tests` runs them here; `palbase test
// --users alice,bob --base-url http://localhost:8080 -- bun test ./tests` runs
// them against the app you started, as test users made for the run and deleted
// after. With an environment's token (PALBASE_TOKEN, scope auth:test-users) no
// key is made and no app starts here: run them against the deployed machine,
// --base-url https://<ref>.app.palbase.studio. The platform runs them against
// each new build before it takes traffic (palbase machines:update <name>
// --test-command "bun test ./tests" --test-users alice,bob). Where no app
// answers, the HTTP tests skip themselves.
import { describe, expect, it } from "bun:test";
import { api, isolated, testRun } from "palbase/backend/test";
import { HealthController } from "../src/health.controller.ts";

describe("HealthController", () => {
  it("says the app is well", () => {
    expect(isolated().get(HealthController).health()).toEqual({ ok: true });
  });
});

describe.skipIf(!testRun.stack)("the app, over HTTP", () => {
  it("answers its health", async () => {
    expect(await api.get("/health")).toEqual({ ok: true });
  });
});
