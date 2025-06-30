"use client";
import React, { useCallback, useState } from 'react';
import '../styles/contact.css'; // Adjust the path as necessary


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Dummy translation function, replace with your i18n/t function if needed
  const t = (text: string) => text;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSuccessMessage('');
      setErrorMessage('');
      try {
        // Replace this with your actual submit logic (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setErrorMessage('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  return (
    <section className="max-w-xl mx-auto py-16">
      <div className='contact-container'>
  <div style={{marginTop:'250px'}}>
  <div className='contact-text'>
  <h1>{t('Contact Us')}</h1>
  <p>{t('Have a question or you want your mosque to join Deenly? Drop us a message')}</p>
  </div>
  <div className='detail-txt'>
    <h2><b>Contact Details</b></h2>
    <ul style={{marginTop:'20px'}}>
      <li><b>● Phone</b> (+49)160 771 578 1</li>
      <li><b>● Email</b> <u>info@deenly.io</u></li>
    </ul>
  </div>
  </div>
         {/* Call-to-Action Section */}
         <section className="cta">
         <div className="cta-section">
           <form onSubmit={handleSubmit} className="sign-up-form">
            <label>Your Name</label>
             <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleInputChange}
               placeholder={t('Your name')}
               className="form-input"
               required
             />
              <label>Your Email</label>
             <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
               placeholder={t('Your email')}
               className="form-input"
               required
             />
              <label style={{marginLeft:'20px'}}>Your Message</label>
             <textarea
               name="message"
               value={formData.message}
               onChange={handleInputChange}
               placeholder={t('Your message')}
               className="form-input"
               rows={4}
               required
             ></textarea>
             <button style={{backgroundColor:'var(--button-color)',color:'var(--button-text)'}} type="submit" className="cta-button" disabled={isSubmitting}>
               {isSubmitting ? t('Submitting...') : t('Send')}
             </button>
           </form>
           {successMessage && <p className="success-message">{successMessage}</p>}
           {errorMessage && <p className="error-message">{errorMessage}</p>}
         </div>
       </section>
     </div>
    </section>
  );
}
