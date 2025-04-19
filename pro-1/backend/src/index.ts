import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.text('Hello signup!')
})

app.post('/api/v1/signin', (c) => {
  return c.text('Hello signin!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello blog!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello blog!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello blog!')
})

export default app
