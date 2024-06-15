import React, { useState, useEffect } from 'react';

function App() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/submissions');
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      <h1>Reddit Clone</h1>
      <div>
        {submissions.length > 0 ? (
          submissions.map((submission) => (
            <div key={submission.id}>
              <h2>{submission.title}</h2>
              <p>{submission.content}</p>
              <p><em>By {submission.author}</em></p>
            </div>
          ))
        ) : (
          <p>No submissions to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
