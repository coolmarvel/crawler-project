import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import { Firestore, addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messaingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

export let app: FirebaseApp;
try {
  app = getApp("app");
} catch (error) {
  app = initializeApp(firebaseConfig, "app");
}

export const db = getFirestore(app);

export class Database {
  private readonly db: Firestore;

  constructor(db: Firestore) {
    this.db = db;
  }

  async addData<T extends object>(collections: string, createData: T) {
    return addDoc(collection(this.db, collections), createData);
  }

  async setData<T extends object>(collections: string, key: string, value: T) {
    return setDoc(doc(this.db, collections, key), value);
  }

  async getData(collections: string, key: string, value: string) {
    const querySnapshot = await getDocs(query(collection(this.db, collections), where(key, "==", value)));

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }

  async getAllData(collections: string) {
    const querySnapshot = await getDocs(collection(this.db, collections));

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }
}
