import React from "react";

const CommitteeMember = ({ year, name, role, social, email, image }) => {
  const imagePath = `committee-photos/${year}/${image}`;

  return (
    <div className="role">
      {social ? (
        <a href={social} target="_blank" rel="noopener noreferrer">
          <img src={imagePath} className="committee" alt={`${name}, ${role}`} />
        </a>
      ) : (
        <img src={imagePath} className="committee" alt={`${name}, ${role}`} />
      )}
      <p className="name">{name}</p>
      <p className="role-name">{role}</p>
      {email && (
        <a href={`mailto:${email}`} className="email">
          {email}
        </a>
      )}
    </div>
  );
};

export default CommitteeMember;
