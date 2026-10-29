import { defineSchema, defineTable, index, integer, ownedByUser, policy, text, timestamp, uuid } from "palbase/backend";

// Each user's notes: theirs alone — row-level security says so, not the routes.
const notes = defineTable("notes", {
  columns: {
    id: uuid().primaryKey().defaultRandom(),
    owner: ownedByUser(),
    title: text(),
    created_at: timestamp().defaultNow(),
  },
  policies: (p) => [policy("notes_own").for("all").to("authenticated").using(p.col("owner").eq(p.auth.uid())).withCheck(p.col("owner").eq(p.auth.uid()))],
  indexes: (p) => [index("notes_owner_created").on(p.col("owner"), p.col("created_at"))],
});

// The goals set: a table this pull request adds, previewed with a database of its own.
const goals = defineTable("goals", {
  columns: {
    id: uuid().primaryKey().defaultRandom(),
    title: text(),
    target_minutes: integer().default(30),
    created_at: timestamp().defaultNow(),
  },
});

// Database.public.notes is typed from this file by palbase/palbase-env.d.ts — its rows, inserts, unique keys and
// relations: palbase db:types writes them there. Run it again when you change the schema.
const schema = defineSchema("public", { tables: [notes, goals] });
export default schema;
