import { Module } from "palbase/backend";
import { HealthController } from "./health.controller.ts";
import { NotesController } from "./notes/notes.controller.ts";
import { ProofFresh, ProofNew, ProofNotes, ProofThrows } from "./proof/proof.templates.ts";

@Module({ controllers: [HealthController, NotesController], providers: [ProofNotes, ProofThrows, ProofNew, ProofFresh] })
export class AppModule {}
