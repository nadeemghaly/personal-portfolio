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
              <p className="contact-message-text">
                {contactData.message}
              </p>
            </div>
          </div>

          <div className={`contact-form-container ${
            isInView ? 'contact-form-animated' : 'contact-form-hidden'
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
