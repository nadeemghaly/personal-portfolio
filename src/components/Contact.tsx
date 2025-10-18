import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { contactData } from '../data';
import { SectionWrapper, ContactInfo, Form, Card } from './ui';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactData.contactInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
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
      className="py-20 px-6 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      title={contactData.title}
      description={contactData.description}
    >
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <ContactInfo
              email={contactData.contactInfo.email}
              phone={contactData.contactInfo.phone}
              location={contactData.contactInfo.location}
            />

            <Card className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {contactData.message}
              </p>
            </Card>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Form
              fields={formFields}
              onSubmit={handleSubmit}
              formData={formData}
              onChange={handleChange}
              submitText="Send Message"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
