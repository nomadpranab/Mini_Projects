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
      name: "Sunset Beach",
      avatar:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      description: "Beautiful sunset at the beach",
    },
    {
      id: 2,
      name: "Mountain Hike",
      avatar:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=400&fit=crop",
      description: "Adventure in the mountains",
    },
    // Add 10 more users like these (12 total)
    {
      id: 3,
      name: "City Lights",
      avatar:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=400&fit=crop",
      description: "Night lights of a bustling city",
    },
    {
      id: 4,
      name: "Forest Trail",
      avatar:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
      description: "Peaceful forest walk",
    },
    {
      id: 5,
      name: "Desert Dunes",
      avatar:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
      description: "Orange desert dunes",
    },
    {
      id: 6,
      name: "Snowy Mountain",
      avatar:
        "https://images.unsplash.com/photo-1486308510493-cb576bbf6f0b?w=400&h=400&fit=crop",
      description: "Snow covered mountain peaks",
    },
    {
      id: 7,
      name: "Ocean Wave",
      avatar:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
      description: "Large ocean wave",
    },
    {
      id: 8,
      name: "Golden Gate",
      avatar:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
      description: "Famous Golden Gate bridge",
    },
    {
      id: 9,
      name: "Countryside",
      avatar:
        "https://images.unsplash.com/photo-1468071174046-657d9d351a40?w=400&h=400&fit=crop",
      description: "Green fields countryside",
    },
    {
      id: 10,
      name: "City Skyline",
      avatar:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=400&fit=crop",
      description: "Modern city skyline",
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
        <span className="col-span-full text-md text-center text-gray-200 mb-4">by Pranab</span>
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