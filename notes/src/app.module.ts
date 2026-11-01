import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { WithNotes } from "./notes/notes.template.ts";

@Module({ controllers: [HealthController, NotesController], providers: [WithNotes] })
export class AppModule {}
