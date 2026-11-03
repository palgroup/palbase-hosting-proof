import { Database, TestUserTemplate, type TemplateUser } from "palbase/backend";

// Proof of #201–#204 (test user templates right after a push): a test account
// with notes, one whose template throws, and one that goes away in a later push.

@TestUserTemplate({ name: "proof-notes" })
export class ProofNotes {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([
      { owner: user.id, title: "proof one" },
      { owner: user.id, title: "proof two" },
      { owner: user.id, title: "proof three" },
    ]);
  }

  async undo(user: TemplateUser) {
    await Database.public.notes.deleteMany({ where: { owner: user.id } });
  }
}

@TestUserTemplate({ name: "proof-throws" })
export class ProofThrows {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([{ owner: user.id, title: "never kept" }]);
    throw new Error("proof: the seed throws on purpose");
  }
}

// Added in a push of its own, asked for at once.
@TestUserTemplate({ name: "proof-fresh" })
export class ProofFresh {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([
      { owner: user.id, title: "fresh one" },
      { owner: user.id, title: "fresh two" },
      { owner: user.id, title: "fresh three" },
      { owner: user.id, title: "fresh four" },
    ]);
  }

  async undo(user: TemplateUser) {
    await Database.public.notes.deleteMany({ where: { owner: user.id } });
  }
}

// Added in a push of its own, asked for at once (on the final platform code).
@TestUserTemplate({ name: "proof-latest" })
export class ProofLatest {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([
      { owner: user.id, title: "latest one" },
      { owner: user.id, title: "latest two" },
      { owner: user.id, title: "latest three" },
      { owner: user.id, title: "latest four" },
      { owner: user.id, title: "latest five (the template's second version)" },
    ]);
  }

  async undo(user: TemplateUser) {
    await Database.public.notes.deleteMany({ where: { owner: user.id } });
  }
}
