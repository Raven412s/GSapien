import { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact | GSapien',
  description: 'Get in touch with the GSapien team. We’d love to hear from you!',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6 md:px-24">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have an idea, suggestion, or just want to say hi? Let’s connect!
        </p>
      </section>
      <ContactForm />
    </main>
  );
}
