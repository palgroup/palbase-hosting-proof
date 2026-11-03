import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { ProofGone, ProofNotes, ProofThrows } from "./proof/proof.templates.ts";

@Module({ controllers: [HealthController, NotesController], providers: [ProofNotes, ProofThrows, ProofGone] })
export class AppModule {}
