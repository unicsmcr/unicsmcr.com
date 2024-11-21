import React, { useState } from 'react';
import { useAuth } from './context/Auth';
import TimelineEvent from './TimelineEvent';
import AddEventForm from './AddEventForm';
import LoginButton from './LoginButton';

const Timeline = () => {
  const { user } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [events, setEvents] = useState([
    {
      title: 'Company Founded',
      description: 'Our journey began in Silicon Valley',
      isKey: true,
      imageUrl: '/api/placeholder/400/320',
      date: '2020'
    },
    {
      title: 'First Product Launch',
      description: 'Released our flagship product',
      isKey: false,
      date: '2021'
    },
    {
      title: '1 Million Users',
      description: 'Reached major milestone',
      isKey: true,
      imageUrl: '/api/placeholder/400/320',
      date: '2022'
    },
    {
      title: 'Global Expansion',
      description: 'Opened offices in Europe',
      isKey: false,
      date: '2023'
    }
  ]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (indexToDelete) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((_, index) => index !== indexToDelete));
    }
  };

  // Calculate the minimum width needed for the timeline
  const timelineWidth = Math.max(events.length * 300, 1200);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <section className="max-w-screen-xl mx-auto py-20">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl text-purple-500 font-bold font-sans uppercase">
            Company Timeline
          </h2>
          <div className="flex gap-4">
            <LoginButton />
            {user?.role === 'admin' && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Add Event
              </button>
            )}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative overflow-x-auto overflow-y-hidden">
          <div
            className="relative h-96"
            style={{ width: `${timelineWidth}px` }}
          >
            {/* Main horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-500" />

            {/* Events */}
            {events.map((event, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${(index * 300) + 150}px`,
                  top: '50%'
                }}
              >
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2" />

                {/* Event content */}
                <TimelineEvent
                  {...event}
                  isTop={index % 2 === 0}
                  onDelete={user?.role === 'admin' ? () => handleDeleteEvent(index) : null}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-gray-400 text-center mt-4 text-sm">
          Scroll horizontally to see more events →
        </div>

        {/* Add Event Modal */}
        {showAddForm && (
          <AddEventForm
            onClose={() => setShowAddForm(false)}
            onAddEvent={handleAddEvent}
          />
        )}
      </section>
    </div>
  );
};
