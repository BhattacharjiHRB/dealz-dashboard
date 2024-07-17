import * as z from "zod"





export const loginValidation = z.object({
    phone: z.string().min(11,'Minimum 11 Digits').max(11,'Maximum 11 Digits'),
    password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters')
});