import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import TimelineEvent from './TimelineEvent';
import AddEventForm from './AddEventForm';
import LoginButton from './LoginButton';
import './Timeline.css';

const Timeline = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const { user } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [events, setEvents] = useState([
    {
      title: '',
      description: '',
      isKey: true,
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      date: ''
    },
    {
      title: 'Cool event!',
      description: 'Another milestone',
      isKey: false,
      date: '2021'
    },
    {
      title: 'Cool event!',
      description: 'Progress continues',
      isKey: false,
      date: '2022'
    },
    {
      title: 'Key event!',
      description: '',
      isKey: true,
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      date: '2023'
    }
  ]);

  // Handle mouse down event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const timeline = scrollRef.current;
    if (timeline) {
      timeline.addEventListener('mouseleave', handleMouseUp);
    }
    return () => {
      if (timeline) {
        timeline.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (indexToDelete) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <div className="timeline-section">
      <h2 className="events-title">EVENTS</h2>
      <div 
        ref={scrollRef}
        className="timeline-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="timeline-content" style={{ width: `${events.length * 300 + 300}px` }}>
          <div className="timeline-event-container">
            <div className="timeline-line" />
            {events.map((event, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: `${(index * 300) + 150}px`,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <div className="timeline-dot" />
                <TimelineEvent
                  {...event}
                  isTop={index % 2 === 0}
                  onDelete={user?.role === 'admin' ? () => handleDeleteEvent(index) : null}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="timeline-scroll-hint">
        Scroll horizontally to see more events →
      </div>
      {showAddForm && (
        <AddEventForm
          onClose={() => setShowAddForm(false)}
          onAddEvent={handleAddEvent}
        />
      )}
    </div>
  );
};

export default Timeline;