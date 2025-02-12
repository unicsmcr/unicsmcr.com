import React from "react";

const CommitteeMember = ({ year, name, role, email, image }) => {
  const imagePath = `${year}/${image}`;
  return (
    <div className="role">
      <img src={imagePath} className="committee" alt={`${name}, ${role}`} />
      <p className="name">{name}</p>
      <p className="role-name">{role}</p>
      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
    </div>
  );
};

export default CommitteeMember;
