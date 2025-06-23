import React, { useState } from 'react';
import SqlEditor from '../components/SqlEditor';

const sampleScenario = {
  id: '1',
  title: 'Music Store',
  description: "You're a junior data analyst at a music store. Retrieve all songs from the 'Pop' genre sorted by popularity.",
  solutionQuery: 'SELECT * FROM songs WHERE genre = \"Pop\" ORDER BY popularity DESC;'
};

const ScenarioPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const checkAnswer = () => {
    const cleaned = query.replace(/\s+/g, ' ').trim().toLowerCase();
    const solution = sampleScenario.solutionQuery.replace(/\s+/g, ' ').trim().toLowerCase();
    if (cleaned === solution) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div>
      <h2>{sampleScenario.title}</h2>
      <p>{sampleScenario.description}</p>
      <SqlEditor value={query} onChange={setQuery} />
      <button onClick={checkAnswer}>Run Query</button>
      {result === 'correct' && <p style={{ color: 'green' }}>Correct!</p>}
      {result === 'incorrect' && <p style={{ color: 'red' }}>Try again.</p>}
    </div>
  );
};

export default ScenarioPage;
