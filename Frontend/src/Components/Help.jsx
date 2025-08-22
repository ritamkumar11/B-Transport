import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What services does B-Transport offer?",
      answer: "We provide rental cabs, goods transport, and logistics solutions for both individuals and businesses."
    },
    {
      question: "How can I book a vehicle?",
      answer: "You can book directly through our website or by contacting our customer support."
    },
    {
      question: "Is advance booking available?",
      answer: "Yes, you can schedule rides or cargo transport in advance to ensure timely service."
    },
    {
      question: "What areas do you serve?",
      answer: "We operate across major cities and towns in Maharashtra and surrounding states."
    },
    {
      question: "Are your rates fixed or do they vary?",
      answer: "We offer competitive pricing based on distance, vehicle type, and service duration."
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
