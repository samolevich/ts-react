import React, {useState} from 'react';

interface todoFormProps {onAdd(title: string): void};

export const TodoForm: React.FunctionComponent<todoFormProps> = props => {
  const [title, setTitle] = useState<string>('');

  const changer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const enterTodo = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title)
      setTitle('');
    }
  };

  return (
    <div className='input-field'>
      <input
        type='text' id='title'
        onChange={changer}
        value={title}
        onKeyPress={enterTodo}
      />
      <label htmlFor='title' className='active'>
        Enter smthng
      </label>
    </div>
  );
};
