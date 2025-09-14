import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Budget Buddy", description: "A personal finance manager", url: "/projects/budgetbuddy" },
  { id: 2, name: "Weather App", description: "Shows realtime weather info", url: "https://endearing-valkyrie-845add.netlify.app/" },
  { id: 3, name: "Expense Tracker", description: "Track your daily expenses easily", url: "/expenseTracker" },
  // Add your project URLs accordingly
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-700 to-white text-gray-900 font-sans p-8">
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-black mb-8 hover:text-blue-400 transition-colors duration-200">
          ls -l projects
        </h1>
        <p className="max-w-xl mx-auto text-gray-900">
          A curated list of projects showcasing my journey and skills
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, name, description, url }) => (
          <div
            key={id}
            className="bg-gray-700 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-blue-400/60 transition-shadow duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
            <p className="text-gray-400 text-sm flex-grow">{description}</p>
            <Link
              to={url}
              className="mt-4 inline-block bg-blue-300 hover:bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-300"
            >
              Get into project
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export { Home };