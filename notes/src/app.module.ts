import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { WorkoutsController } from "./workouts.controller.ts";

@Module({ controllers: [HealthController, NotesController, WorkoutsController] })
export class AppModule {}
