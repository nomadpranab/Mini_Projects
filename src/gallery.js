import React from "react";

// Single Card component with destructured props and overlay
function ProfileCard({ avatar, name, description }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg m-4 w-72 h-72">
      <img
        src={avatar}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white hover:bg-opacity-0 transition duration-300">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

// Gallery component mapping users to cards
export default function GalleryApp() {
  // Users data array
  const users = [
    {
      id: 1,
      name: "Ganpati Visarjan",
      avatar:
        "https://images.unsplash.com/photo-1757857325732-045d2270dc20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Kolhapur",
    },
    {
      id: 2,
      name: "Streets of Bombay",
      avatar:
        "https://images.unsplash.com/photo-1757857357792-9e3c2fe92c72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
      description: "Bombay",
    },
    // Add 10 more users like these (12 total)
    {
      id: 3,
      name: "Beach Sunset",
      avatar:
        "https://images.unsplash.com/photo-1757857325787-596bc5128682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
      description: "Pondicherry",
    },
    {
      id: 4,
      name: "Serenity",
      avatar:
        "https://images.unsplash.com/photo-1757857325852-4553b19066d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
      description: "Chitkul , Himachal Pradesh",
    },
    {
      id: 5,
      name: "The TAJ",
      avatar:
        "https://images.unsplash.com/photo-1757857325732-c21cd31b619d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
      description: "Bombay, India",
    },
    {
      id: 6,
      name: "Mountains Peace",
      avatar:
        "https://images.unsplash.com/photo-1757857325692-5ce38f9c54c8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sangla,Himachal Pradesh",
    },
    {
      id: 7,
      name: "Street Art",
      avatar:
        "https://images.unsplash.com/photo-1757857325792-567e8783a0ae?q=80&w=631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Dalal Street, Bombay",
    },
    {
      id: 8,
      name: "Still Standing",
      avatar:
        "https://images.unsplash.com/photo-1757857325772-6cace8e7f7eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bombay",
    },
    {
      id: 9,
      name: "Scenic Riverside",
      avatar:
        "https://images.unsplash.com/photo-1757857325725-b4c6cb46d3cb?q=80&w=645&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Chitkul, Himachal Pradesh",
    },
    {
      id: 10,
      name: "Shillong's Saddle",
      avatar:
        "https://images.unsplash.com/photo-1757857325868-e5cd10af8b4d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Meghalaya",
    },
    {
      id: 11,
      name: "Lake View",
      avatar:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=400&fit=crop",
      description: "Serene lake view",
    },
    {
      id: 12,
      name: "Autumn Forest",
      avatar:
        "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=400&h=400&fit=crop",
      description: "Colorful autumn trees",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-red-600 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center place-items-center">
        <h1 className="col-span-full text-6xl font-extrabold text-red-700  text-center">|  कलाकृति  |</h1>
        <span className="col-span-full text-md text-center text-gray-200 mb-4">- Pranab</span>
      {users.map(({ id, name, avatar, description }) => (
        <ProfileCard
          key={id}
          name={name}
          avatar={avatar}
          description={description}
        />
      ))}
    </div>
  );
}

export { GalleryApp };