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

@TestUserTemplate({ name: "proof-gone" })
export class ProofGone {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([{ owner: user.id, title: "from a template removed later" }]);
  }

  async undo(user: TemplateUser) {
    await Database.public.notes.deleteMany({ where: { owner: user.id } });
  }
}
