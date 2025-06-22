import { useEffect, useState } from 'react';
import { getHabits, addHabit, deleteHabit } from '../db';

export default function HabitList() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  useEffect(() => {
    async function loadHabits() {
      const data = await getHabits();
      setHabits(data);
    }
    loadHabits();
  }, []);

  const handleAdd = async () => {
    if (!newHabit.trim()) return;
    const habit = { name: newHabit, created: new Date().toISOString() };
    await addHabit(habit);
    setHabits(await getHabits());
    setNewHabit('');
  };

  const handleDelete = async (id) => {
    await deleteHabit(id);
    setHabits(await getHabits());
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Habit Tracker</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="New habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {habits.map((habit) => (
          <li key={habit.id} className="flex justify-between bg-gray-100 p-2 rounded">
            {habit.name}
            <button onClick={() => handleDelete(habit.id)} className="text-red-500">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
