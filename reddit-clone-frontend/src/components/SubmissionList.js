import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Submission from './Submission';

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('/api/submissions');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>Submissions</h2>
      {submissions.map((submission) => (
        <Submission
          key={submission.id}
          title={submission.title}
          content={submission.content}
          // Add any other submission properties you need
        />
      ))}
    </div>
  );
};

export default SubmissionList;