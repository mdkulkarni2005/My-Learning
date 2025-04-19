import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello world!");
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json()

  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })

  return c.text("Hello signup!");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Hello signin!");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello blog!");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello blog!");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello blog!");
});

export default app;
