import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./faq.css"; 

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqData = [
    {
      question: "How can I contact you?",
      answer: 'Click on "Join Us" or see our "Contact Us" section.',
    },
    {
      question: "How to learn about UniCS events?",
      answer: "Check our social media (Instagram at the top) to catch up with our events or view our timeline on this site.",
    },
    {
      question: "How to become part of the UniCS team?",
      answer: "Keep an eye on our social media and posters for recruitment announcements.",
    },
    {
      question: "I am not a Computer Science student, can I still join?",
      answer: "100%. UniCS is open to all students. We have many events and workshops geared at helping beginners.",
    },
    {
      question: "Is it free to join UniCS?",
      answer: "Yes! It is completely free of charge to become a member and is super quick and easy.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="header2">FAQs</h2>
        {faqData.map((item, index) => (
        <div key={index} className="faq-item">
        <div
            className={`faq-question ${openIndexes.includes(index) ? "open" : ""}`}
            onClick={() => toggleFaq(index)}
        >
            {item.question}
            <span className="faq-icon">
            {openIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        </div>
        <div className={`faq-answer ${openIndexes.includes(index) ? "open" : ""}`}>
            {item.answer}
        </div>
        </div>
        ))}
    </div>
  );
};

export default Faq;

