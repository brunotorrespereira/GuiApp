


import { z } from 'zod';

 export const userSchema = z.object({
  email: z.string().email('email precisa ser valido'),
  senha: z.number(),
});

const result = userSchema.safeParse({
  email: 'w.brunopereiraa@gmail.com',
  senha: 134567,
  
})

console.log(result)