import { z } from 'zod';
const signupSchema = z.object({
    username: z.string({ required_error: 'Name is required' })
        .trim()
        .min(3, { message: 'Name must be at least of 3 chars.' })
        .max(255, { message: 'Name must not be more than 255 characters' }),

    email: z.string({ required_error: 'Name is required' })
        .trim()
        .email({ message: 'Inavlid email address' })
        .min(3, { message: 'Email must be at least of 3 chars.' })
        .max(255, { message: 'Email must not be more than 255 characters' }),

    phone: z.string({ required_error: 'Name is required' })
        .trim()
        .min(10, { message: 'phone must be at least of 3 chars.' })
        .max(20, { message: 'phone must not be more than 255 characters' }),

    password: z.string({ required_error: 'Name is required' })
        .trim()
        .min(7, { message: 'password must be at least of 7 chars.' })
        .max(1024, { message: 'password must not be more than 1024 characters' })

});

export default signupSchema;