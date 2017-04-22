import React from 'react';
import { func, string } from 'prop-types';

export default function NameForm({ name, onChange }) {
  return (
    <div>
      <h1>What's your name?</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          defaultValue={name}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </div>
  );
}

NameForm.propTypes = {
  name: string,
  onChange: func.isRequired
};