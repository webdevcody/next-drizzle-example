import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  prompt: text("prompt").notNull(),
});

export type Question = typeof questions.$inferSelect;
