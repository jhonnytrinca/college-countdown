import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';
import useAuth from './useAuth';

const initialValues = {
  name: '',
  semester: null,
  activities: [{ complete: false, grade: null }]
};

const useRegister = () => {
  const { userInfo } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(initialValues);
  const [data, setData] = useState<any[]>([]);

  const getAll = async () => {
    try {
      const ref = await getDocs(
        query(collection(db, 'subjects'), orderBy('semester'))
      );
      let docs: any = [];
      ref.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setData(docs);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getBySemester = async (sem: string) => {
    try {
      const ref = await getDocs(
        query(collection(db, 'subjects'), where('semester', '==', sem))
      );
      let docs: any = [];
      ref.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setData(docs);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const get = async (id: string) => {
    try {
      setIsLoading(true);
      const ref = await getDoc(doc(db, 'subjects', id));
      const data: any = ref.data();
      setItem({ ...data, id });
      setIsLoading(false);
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
        ...data,
        updatedAt: serverTimestamp()
      });
    } catch (e) {
      console.log(e);
    }
  };

  return { getAll, getBySemester, get, add, update, data, item, isLoading };
};

export default useRegister;
