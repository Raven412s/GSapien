'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

    useLayoutEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
        }
    }, []);

    const onSubmit = async (data: ContactFormData) => {
        console.log(data);
        reset();
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto bg-card shadow-md rounded-xl p-8 space-y-6"
        >
            {[
                { id: 'name', label: 'Name', type: 'text', el: <Input placeholder="Enter your name" className='border border-white/15' {...register('name')} /> },
                { id: 'email', label: 'Email', type: 'email', el: <Input placeholder="Enter your email" className='border border-white/15' {...register('email')} /> },
                {
                    id: 'message',
                    label: 'Message',
                    el: <Textarea placeholder="Type your message" className='border border-white/15' rows={5} {...register('message')} />,
                },
            ].map(({ id, label, el }) => (
                <div key={id}>
                    <label className="block text-sm font-medium mb-1" htmlFor={id}>
                        {label}
                    </label>
                    {el}
                    {errors[id as keyof ContactFormData] && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors[id as keyof ContactFormData]?.message}
                        </p>
                    )}
                </div>
            ))}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}
