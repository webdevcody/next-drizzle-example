import { db } from "@/db";

export default async function Home() {
  const questions = await db.query.questions.findMany();

  return (
    <main className="">
      {questions.map((question) => (
        <div key={question.id}>{question.prompt}</div>
      ))}
    </main>
  );
}
