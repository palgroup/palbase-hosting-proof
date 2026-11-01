import { Database, TestUserTemplate, type TemplateUser } from "palbase/backend";

// A test account with notes to show: `palbase auth:test-users:create --template with-notes`
// makes the user and has this write its rows, for a person or an agent to sign in and see the list.
@TestUserTemplate({ name: "with-notes" })
export class WithNotes {
  async seed(user: TemplateUser) {
    await Database.public.notes.insertMany([
      { owner: user.id, title: "Buy milk" },
      { owner: user.id, title: "Call the bank" },
      { owner: user.id, title: "Water the plants" },
    ]);
  }

  // Run before the user is deleted (auth:test-users:delete): takes away what seed wrote.
  async undo(user: TemplateUser) {
    await Database.public.notes.deleteMany({ where: { owner: user.id } });
  }
}
