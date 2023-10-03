import { rest } from 'msw'
import { USER } from '@/APIs/constants.ts'

const userResponse = {
  id: 1,
  email: 'mohibk.in@gmail.com',
  role: 'USER',
  firstName: 'Mohib',
  lastName: 'K',
  avatar: 'https://lh3.googleusercontent.com/a/AAcHTtcWe69lgSZV63P9PJ-4VGteywd9qEI7kKvkVojdBquN=s96-c',
  doneSetup: true,
}

export const handlers = [
  rest.get(USER.GET, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse))
  }),
]
