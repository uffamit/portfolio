'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check your input and try again.',
    };
  }

  // In a real application, you would process the data here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted successfully:');
  console.log(validatedFields.data);

  // Simulate a successful submission
  return { 
    message: 'Thank you for your message! I will get back to you soon.', 
    errors: null 
  };
}
