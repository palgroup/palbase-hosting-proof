import { Body, Controller, Database, Get, Post, User, z, type UserT } from "palbase/backend";

const CreateNote = z.object({ title: z.string().min(1).max(200) });
type CreateNote = z.infer<typeof CreateNote>;

@Controller("/notes")
export class NotesController {
  @Post("")
  async create(@Body(CreateNote) body: CreateNote, @User() user: UserT) {
    return Database.public.notes.insert({ owner: user.id, title: body.title });
  }

  // Row-level security decides what a caller reads: no owner in the query.
  @Get("")
  async list() {
    return Database.public.notes.findMany({ orderBy: { column: "created_at", direction: "desc" }, limit: 20 });
  }
}
