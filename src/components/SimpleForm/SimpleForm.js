import React, { useState } from 'react';
export function SimpleForm() {
  const [textName, setText] = useState({ name: '' });
  const [textEmail, setEmail] = useState({ email: '' });

  function handleClick() {
    console.log(textName, textEmail);
    setText({ name: '' });
    setEmail({ email: '' });
  }
  return (
    <div>
      <input
        value={textName.name}
        placeholder="name"
        onChange={(e) => setText({ name: e.target.value })}
      />
      <br />
      <input
        value={textEmail.email}
        placeholder="email"
        onChange={(e) => setEmail({ email: e.target.value })}
      />
      <br />
      <button onClick={handleClick}>submit</button>
    </div>
  );
}
