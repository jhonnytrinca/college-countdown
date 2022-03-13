import React, { createContext, useState } from 'react';
import { db } from '../services/firebase';
import useAuth from '../hooks/useAuth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type RegisterProps = {};

export const RegisterContext = createContext<RegisterProps>(
  {} as RegisterProps
);

const Register = () => {};

export default Register;
