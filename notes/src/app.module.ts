import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { ProofFresh, ProofGone, ProofLatest, ProofNotes, ProofThrows } from "./proof/proof.templates.ts";

@Module({ controllers: [HealthController, NotesController], providers: [ProofNotes, ProofThrows, ProofGone, ProofFresh, ProofLatest] })
export class AppModule {}
