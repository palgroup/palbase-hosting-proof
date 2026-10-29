import { PalbaseFactory } from "palbase/backend";
import { AppModule } from "./app.module.ts";
import schema from "./db/public.ts";

// Serves on $PORT with its database; the deploy runs it once more with
// PALBASE_DB_MIGRATE to bring the database to this schema.
await PalbaseFactory.create(AppModule, { db: { schemas: [schema] } });
