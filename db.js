import { openDB } from 'idb';

const DB_NAME = 'habitDB';
const STORE_NAME = 'habits';

export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function getHabits() {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}

export async function addHabit(habit) {
  const db = await getDB();
  return db.add(STORE_NAME, habit);
}

export async function deleteHabit(id) {
  const db = await getDB();
  return db.delete(STORE_NAME, id);
}
