import { Body, Controller, Database, Get, Post, z } from "palbase/backend";

const LogWorkout = z.object({ minutes: z.number().int().min(1).max(600) });
type LogWorkout = z.infer<typeof LogWorkout>;

// Open to anyone, for the proof: written and read as the service.
@Controller("/workouts", { auth: false })
export class WorkoutsController {
  @Post("")
  async log(@Body(LogWorkout) body: LogWorkout) {
    return Database.$asService().public.workouts.insert({ minutes: body.minutes });
  }

  @Get("")
  async list() {
    return Database.$asService().public.workouts.findMany({ orderBy: { column: "created_at", direction: "desc" }, limit: 20 });
  }
}
