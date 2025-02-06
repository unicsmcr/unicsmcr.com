import React from "react";

const CommitteeMember = ({ name, role, email, image }) => {
  return (
    <div className="role">
      <img src={image} className="committee" alt={`${name}, ${role}`} />
      <p className="name">{name}</p>
      <p className="role-name">{role}</p>
      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
    </div>
  );
};

export default CommitteeMember;
