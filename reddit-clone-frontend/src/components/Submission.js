import React from 'react';

const Submission = ({ title, content, author, upvotes, downvotes, /* Add other props */ }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Upvotes: {upvotes.length}</p>
      <p>Downvotes: {downvotes.length}</p>
      {/* Render other submission properties */}
    </div>
  );
};

export default Submission;