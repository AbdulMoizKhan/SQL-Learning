import React from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const SqlEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <textarea
      style={{ width: '100%', height: '150px' }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SqlEditor;
