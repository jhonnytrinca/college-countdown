import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import useAuth from './useAuth';

const useRegister = () => {
  const { userInfo } = useAuth();
  const [data, setData] = useState();
  const [item, setItem] = useState();

  const getAll = async () => {
    try {
      const ref = await getDocs(collection(db, 'subjects'));
      let docs: any = [];
      ref.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setData(docs);
    } catch (e) {
      console.log(e);
    }
  };

  const get = async (id: string) => {
    try {
      const ref = await getDoc(doc(db, 'subjects', id));
      const data: any = ref.data();
      setItem(data);
    } catch (e) {
      console.log(e);
    }
  };

  const add = async (data: any) => {
    try {
      await addDoc(collection(db, 'subjects'), {
        userId: userInfo.user!.uid,
        ...data,
        createdAt: serverTimestamp(),
        activities: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        completed: false
      });
    } catch (e) {
      console.log(e);
    }
  };

  const update = async (data: any, id: string) => {
    try {
      await updateDoc(doc(db, 'subjects', id), {
        updatedAt: serverTimestamp(),
        ...data
      });
    } catch (e) {
      console.log(e);
    }
  };

  return { getAll, get, add, update, data, item };
};

export default useRegister;
