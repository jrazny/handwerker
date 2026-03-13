import { z } from 'zod';
import type { APIRoute } from 'astro';

const contactSchema = z.object({
  anrede: z.string().optional(),
  name: z.string().min(2, 'Name ist zu kurz'),
  telefon: z.string().min(6, 'Telefonnummer ist ungültig'),
  email: z.string().email('Ungültige E-Mail Adresse'),
  betreff: z.string().optional(),
  nachricht: z.string().optional(),
  datenschutz: z.boolean().refine(v => v === true, { message: 'Sie müssen der Datenschutzerklärung zustimmen' })
});

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate
    const parsed = contactSchema.parse(data);

    // TODO: Send Email via Resend OR trigger webhook based on config.features.kontakt_backend
    // Since this is a template, we just return success
    
    console.log("Contact form submitted:", parsed);

    return new Response(JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ success: false, errors: error.errors }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({ success: false, message: 'Ein unerwarteter Fehler ist aufgetreten.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
