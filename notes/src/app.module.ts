import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { GoalsController } from "./goals.controller.ts";

@Module({ controllers: [HealthController, NotesController, GoalsController] })
export class AppModule {}
