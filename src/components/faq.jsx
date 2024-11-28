import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Faq.css"; 

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
      question: "Question 1?",
      answer: "Answer 1.",
    },
    {
      question: "Question 2?",
      answer: "Answer 2.",
    },
    {
      question: "Question 3?",
      answer: "Answer 3.",
    },
    {
      question: "Question 4?",
      answer: "Answer 4.",
    },
    {
      question: "Question 5?",
      answer: "Answer 5.",
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

