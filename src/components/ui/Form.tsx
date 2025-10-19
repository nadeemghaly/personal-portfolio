import { FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from './Button';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  required?: boolean;
  rows?: number;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formData: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submitText?: string;
  className?: string;
  formName?: string;
  isSubmitting?: boolean;
}

export function Form({
  fields,
  onSubmit,
  formData,
  onChange,
  submitText,
  className = '',
  formName = 'contact',
  isSubmitting = false
}: FormProps) {
  return (
    <form 
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit} 
      className={`space-y-6 ${className}`}
    >
      <input type="hidden" name="form-name" value={formName} />
      <div style={{ display: 'none' }}>
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={onChange}
              required={field.required}
              rows={field.rows || 5}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={onChange}
              required={field.required}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        icon={Send}
        iconPosition="right"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : submitText}
      </Button>
    </form>
  );
}
