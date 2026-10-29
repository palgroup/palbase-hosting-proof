import { Body, Controller, Database, Get, Post, z } from "palbase/backend";

const SetGoal = z.object({ title: z.string().min(1).max(200) });
type SetGoal = z.infer<typeof SetGoal>;

// Open to anyone, for the proof: written and read as the service.
@Controller("/goals", { auth: false })
export class GoalsController {
  @Post("")
  async set(@Body(SetGoal) body: SetGoal) {
    return Database.$asService().public.goals.insert({ title: body.title });
  }

  @Get("")
  async list() {
    return Database.$asService().public.goals.findMany({ orderBy: { column: "created_at", direction: "desc" }, limit: 20 });
  }
}
