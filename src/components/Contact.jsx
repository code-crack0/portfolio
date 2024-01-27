import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7gsl67e', 'template_8mtl9pp', e.target, 'btruc_bmnOujGxt1X')
      .then((result) => {
        setShowSuccessMessage(true);
        
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl italic">Please reach out if you have any questions. I will get back to you at the earliest.</p>
        <form action="#" className="space-y-8" onSubmit={sendEmail}>
        {showSuccessMessage && (
          <div className="bg-green-200 text-green-800 p-4 mb-4 rounded-md">
            Your message has been sent successfully!
          </div>
        )}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
            <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" name='subject' id="subject" className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" name='message' className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit focus:ring-4 focus:outline-none ">Send message</button>
        </form>
      </div>
    </section>
  );
}
