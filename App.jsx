import React, { useState } from "react";


export default function App() {
  const [streak, setStreak] = useState(0);
  const [lastCompleted, setLastCompleted] = useState("");

  const markHabitDone = () => {
    const today = dayjs().format("YYYY-MM-DD");

    if (lastCompleted === dayjs().subtract(1, "day").format("YYYY-MM-DD")) {
      setStreak(streak + 1);
    } else if (lastCompleted !== today) {
      setStreak(1);
    }

    setLastCompleted(today);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 text-white font-sans">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 drop-shadow-lg">
          🌟 Habit Tracker
        </h1>

        <p className="text-center text-xl mb-6">
          🔥 Current Streak: <span className="font-bold">{streak} day(s)</span>
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-white">💧 Drink Water</h2>
            <p className="text-sm">Goal: 8 Glasses</p>
            <button
              onClick={markHabitDone}
              className="mt-4 bg-green-400 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded-full"
            >
              Mark Done
            </button>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-white">🧘 Exercise</h2>
            <p className="text-sm">Goal: 30 mins</p>
            <button
              onClick={markHabitDone}
              className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded-full"
            >
              Mark Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
