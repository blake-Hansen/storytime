import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AccountDisplay({ accountData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('This is acount data: ', accountData);
  return (
    <div>
      <p>Welcome</p>
      <div>{accountData.name}</div>
    </div>
  );
}
