import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { services } from '@/lib/services-data';

const formSchema = z.object({
  anrede: z.string().optional(),
  name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein.' }),
  telefon: z.string().min(6, { message: 'Bitte geben Sie eine gültige Telefonnummer ein.' }),
  email: z.string().email({ message: 'Bitte geben Sie eine gültige E-Mail Adresse ein.' }),
  betreff: z.string().optional(),
  nachricht: z.string().optional(),
  datenschutz: z.boolean().refine(val => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen.'
  })
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      anrede: '',
      name: '',
      telefon: '',
      email: '',
      betreff: '',
      nachricht: '',
      datenschutz: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        form.reset();
      } else {
        setErrorMsg(data.message || 'Ein Fehler ist aufgetreten.');
      }
    } catch (e) {
      setErrorMsg('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-sm border border-green-200 text-center shadow-sm">
        <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
        <p className="leading-relaxed">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <Button onClick={() => setSuccess(false)} variant="outline" className="mt-6 border-green-600 text-green-700 hover:bg-green-100">
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {errorMsg && (
          <div className="bg-red-50 text-red-800 p-4 rounded-sm border border-red-200 text-sm">
            {errorMsg}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="anrede"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">Anrede</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-slate-300">
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="herr">Herr</SelectItem>
                    <SelectItem value="frau">Frau</SelectItem>
                    <SelectItem value="divers">Divers</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Max Mustermann" className="bg-white border-slate-300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">Telefon *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0123 456789" className="bg-white border-slate-300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">E-Mail *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="max@beispiel.de" className="bg-white border-slate-300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="betreff"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-slate-700">Betreff / Leistung</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white border-slate-300">
                    <SelectValue placeholder="Worum geht es?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                  <SelectItem value="notdienst" className="text-red-600 font-semibold">Notdienst (dringend)</SelectItem>
                  {services.map(s => (
                    <SelectItem key={s.slug} value={s.slug}>{s.titel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nachricht"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-slate-700">Nachricht</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Wie können wir Ihnen helfen?" 
                  className="min-h-[120px] bg-white border-slate-300 resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="datenschutz"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-slate-200 rounded-sm bg-slate-50">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1"
                />
              </FormControl>
              <div className="space-y-1.5 leading-none">
                <FormLabel className="text-sm font-semibold text-slate-700 leading-relaxed cursor-pointer">
                  Ich stimme der Datenschutzerklärung zu *
                </FormLabel>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Ihre Daten werden nur zur Bearbeitung der Anfrage genutzt. Weitere Infos in der <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a>.
                </p>
              </div>
            </FormItem>
          )}
        />
        {form.formState.errors.datenschutz && (
            <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.datenschutz.message}</p>
        )}

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto bg-accent hover:bg-accent-light text-white font-semibold h-12 px-8 rounded-md">
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </form>
    </Form>
  );
}
