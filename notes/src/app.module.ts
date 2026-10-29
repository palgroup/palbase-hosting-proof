import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";

@Module({ controllers: [HealthController, NotesController] })
export class AppModule {}
