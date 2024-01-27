import dotenv from "dotenv";
dotenv.config();

import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import { getFirestore, Firestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY ?? "",
  authDomain: process.env.AUTH_DOMAIN ?? "",
  projectId: process.env.PROJECT_ID ?? "",
  storageBucket: process.env.STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.MESSAING_SENDER_ID ?? "",
  appId: process.env.APP_ID ?? "",
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

  async getData(collections: string, key: string, value: string) {
    const querySnapshot = await getDocs(query(collection(this.db, collections), where(key, "==", value)));

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }
}
