// palbase types:pull writes the block between the markers: the names this environment holds, for palbase/backend/stack.
// palbase:stack:begin
declare module "palbase/backend/stack" {
  interface Secrets {}

  interface Flags {}

  interface Buckets {}

  interface Roles {}
}
// palbase:stack:end

export {};
// palbase:env:begin
// The app's tables, from its schema files: rows, inserts, unique keys and relations (with, has). Written by
// palbase db:types — run it again when a schema changes.
/**
 * A column's Postgres type, carried in its TypeScript type.
 *
 * __pg is optional, so a row still reads as a plain string or number and is
 * written with a plain value: only the comparison rules of col() and now() see
 * the mark. TypeScript makes numeric, bigint, text, uuid and timestamp one
 * string; without the mark, integer<->numeric (allowed) and integer<->text
 * (refused) could not be told apart.
 */
type Pg<T, N extends string> = T & { readonly __pg?: N };

/**
 * What a jsonb column holds.
 *
 * undefined included: JSON.stringify drops undefined fields, and code that
 * writes { a: undefined } is everywhere — refusing it would be wrong.
 */
type Json = string | number | boolean | null | undefined | Json[] | { [k: string]: Json };

declare module "palbase/backend/env" {
  interface Tables {
    notes: {
      row: {
        id: Pg<string, "uuid">;
        owner: Pg<string, "text">;
        title: Pg<string, "text">;
        created_at: Pg<string, "timestamp">;
      };
      insert: {
        id?: Pg<string, "uuid">;
        owner: Pg<string, "text">;
        title: Pg<string, "text">;
        created_at?: Pg<string, "timestamp">;
      };
      relations: {};
      uniqueKeys: [["id"]];
    };
    goals: {
      row: {
        id: Pg<string, "uuid">;
        title: Pg<string, "text">;
        target_minutes: Pg<number, "integer">;
        created_at: Pg<string, "timestamp">;
      };
      insert: {
        id?: Pg<string, "uuid">;
        title: Pg<string, "text">;
        target_minutes?: Pg<number, "integer">;
        created_at?: Pg<string, "timestamp">;
      };
      relations: {};
      uniqueKeys: [["id"]];
    };
  }
  interface Schemas {}
}
// palbase:env:end
