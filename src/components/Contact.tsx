import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { contactData } from '../data';
import { SectionWrapper, ContactInfo, Form } from './ui';
import '../styles/components/contact.css';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text' as const,
      placeholder: 'Your name',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email' as const,
      placeholder: 'your.email@example.com',
      required: true
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      placeholder: 'Your message...',
      required: true,
      rows: 5
    }
  ];

  return (
    <SectionWrapper
      id="contact"
      className="contact-section"
      title={contactData.title}
      description={contactData.description}
    >
      <div className="contact-container">
        <div ref={ref} className="contact-content">
          <div className={`contact-info-container ${
            isInView ? 'contact-info-animated' : 'contact-info-hidden'
          }`}>
            <ContactInfo
              email={contactData.contactInfo.email}
              phone={contactData.contactInfo.phone}
              location={contactData.contactInfo.location}
            />

            <div className="contact-message-card">
                {contactData.messages.map((message, index) => (
                  <p key={index} className="contact-message-text">
                    {message}
                  </p>
                ))}
            </div>
          </div>

          <div className={`contact-form-container ${
            isInView ? 'contact-form-animated' : 'contact-form-hidden'
          }`}>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-center">
                  ❌ Sorry, there was an error sending your message. Please try again.
                </p>
              </div>
            )}

            <Form
              fields={formFields}
              onSubmit={handleSubmit}
              formData={formData}
              onChange={handleChange}
              submitText="Send Message"
              formName="contact"
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
