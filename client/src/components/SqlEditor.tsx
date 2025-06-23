import React from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const SqlEditor = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <textarea
      className="w-full h-40 p-2 border rounded-md font-mono"
      ref={ref}
      {...props}
    />
  );
});
SqlEditor.displayName = 'SqlEditor';

export default SqlEditor;
