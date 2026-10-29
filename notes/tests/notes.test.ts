// Each user's notes are theirs alone: row-level security says so, not the
// routes. Run as two of the run's test users (palbase test --users alice,bob;
// on the platform, the machine's test users). Their notes go with them: the
// run deletes its users, and a deleted user's rows are erased (ownedByUser()).
import { describe, expect, it } from "bun:test";
import { api, testRun } from "palbase/backend/test";

describe.skipIf(!testRun.stack)("notes", () => {
  it("are each user's own", async () => {
    const title = `a test run's note ${crypto.randomUUID()}`;
    await api.signInAs("alice");
    await api.post("/notes", { title });
    expect((await api.get<{ title: string }[]>("/notes")).map((n) => n.title)).toContain(title);
    await api.signInAs("bob");
    expect((await api.get<{ title: string }[]>("/notes")).map((n) => n.title)).not.toContain(title);
  });
});
