'use client';

import { useState, useRef } from 'react';
import { Send, Check, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof Errors] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    const value = formData[fieldName];
    const error = errors[fieldName];
    
    if (!value) return 'empty';
    if (error) return 'error';
    return 'valid';
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-600 dark:text-green-400">
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="relative">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className={`h-5 w-5 ${
              getFieldStatus('name') === 'valid' ? 'text-green-500' : 
              getFieldStatus('name') === 'error' ? 'text-red-500' : 
              'text-gray-400'
            }`} />
          </div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`block w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
              getFieldStatus('name') === 'valid' ? 'border-green-500 focus:ring-green-500' :
              getFieldStatus('name') === 'error' ? 'border-red-500 focus:ring-red-500' :
              'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            } dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
            placeholder="Enter your full name"
          />
          {getFieldStatus('name') === 'valid' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          )}
          {getFieldStatus('name') === 'error' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className={`h-5 w-5 ${
              getFieldStatus('email') === 'valid' ? 'text-green-500' : 
              getFieldStatus('email') === 'error' ? 'text-red-500' : 
              'text-gray-400'
            }`} />
          </div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`block w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
              getFieldStatus('email') === 'valid' ? 'border-green-500 focus:ring-green-500' :
              getFieldStatus('email') === 'error' ? 'border-red-500 focus:ring-red-500' :
              'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            } dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
            placeholder="your.email@example.com"
          />
          {getFieldStatus('email') === 'valid' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          )}
          {getFieldStatus('email') === 'error' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageSquare className={`h-5 w-5 ${
              getFieldStatus('message') === 'valid' ? 'text-green-500' : 
              getFieldStatus('message') === 'error' ? 'text-red-500' : 
              'text-gray-400'
            }`} />
          </div>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={`block w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
              getFieldStatus('message') === 'valid' ? 'border-green-500 focus:ring-green-500' :
              getFieldStatus('message') === 'error' ? 'border-red-500 focus:ring-red-500' :
              'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            } dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
            placeholder="Tell me about your project or just say hello..."
          />
          {getFieldStatus('message') === 'valid' && (
            <div className="absolute top-3 right-3">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          )}
          {getFieldStatus('message') === 'error' && (
            <div className="absolute top-3 right-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.message}
          </p>
        )}
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {formData.message.length}/500 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).some(key => errors[key as keyof Errors])}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          isSubmitting || Object.keys(errors).some(key => errors[key as keyof Errors])
            ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}