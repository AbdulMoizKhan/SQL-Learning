import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SqlEditor from '../components/SqlEditor';
import { Button } from '../components/ui/button';

const sampleScenario = {
  id: '1',
  title: 'Music Store',
  description: "You're a junior data analyst at a music store. Retrieve all songs from the 'Pop' genre sorted by popularity.",
  solutionQuery: 'SELECT * FROM songs WHERE genre = \"Pop\" ORDER BY popularity DESC;'
};

interface FormValues {
  query: string;
}

const ScenarioPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { query: '' },
  });
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {
    const cleaned = data.query.replace(/\s+/g, ' ').trim().toLowerCase();
    const solution = sampleScenario.solutionQuery.replace(/\s+/g, ' ').trim().toLowerCase();
    if (cleaned === solution) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">{sampleScenario.title}</h2>
      <p>{sampleScenario.description}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <SqlEditor {...register('query')} />
        <Button type="submit">Run Query</Button>
      </form>
      {result === 'correct' && <p className="text-green-600">Correct!</p>}
      {result === 'incorrect' && <p className="text-red-600">Try again.</p>}
    </div>
  );
};

export default ScenarioPage;
