// Timeline.jsx
import React, { useState, useRef, useEffect } from 'react';
import TimelineEvent from './TimeLineEvent.jsx';
import './TimeLine.css';
import EventModal from './EventModal.jsx';  

const Timeline = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      title: 'StudentHack 2025',
      description: 'Hackhaton',
      isKey: true,
      imageUrl: 'stundentHack.jpg',
      date: '13th/14th of April',
      location: 'Nancy rothwell building',
      time: '10:00 AM',
      status: 'Registration soon to open',
      organizer: 'UniCs',
      capacity: 'Over 100 participants',
      requirements: 'Open to all university students',
      fullDescription: 'Join us for StudentHack 2025, a 24-hour hackathon where students from across the UK come together to build amazing projects as you will get chances to get prizes, workshops, and networking opportunities with leading tech companies.',
      registrationLink: ''
    },
    {
      title: 'GameJam 2',
      description: 'Game Jam',
      isKey: true,
      imageUrl: 'gameJam.jpg',
      date: '2025/02/06'
    },
    {
      title: 'LaserTag Event',
      description: 'Hackhaton',
      isKey: true,
      imageUrl: 'laserTag.jpg',
      date: '10th-16th February'
    },
    {
      title: 'May Ball',
      description: 'Social event',
      isKey: true,
      imageUrl: 'mayBall.jpg',
      date: 'May 2025'
    },
    {
      title: 'Great Uni Hack',
      description: 'Hackhaton',
      isKey: true,
      imageUrl: 'greatUniHack.jpg',
      date: '2026'
    }
  ]);

  // The constant for event spacing - use this consistently throughout the component
  const EVENT_SPACING = 300; // pixels between events

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger animation once
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyboardNavigation = (e) => {
    if (e.key === 'ArrowLeft') {
      scrollRef.current.scrollLeft -= 100;
    } else if (e.key === 'ArrowRight') {
      scrollRef.current.scrollLeft += 100;
    }
  };

  useEffect(() => {
    const timeline = scrollRef.current;
    if (timeline) {
      timeline.addEventListener('mouseleave', handleMouseUp);
      timeline.addEventListener('keydown', handleKeyboardNavigation);
    }
    
    // Add a class to body to prevent horizontal overflow
    document.body.classList.add('timeline-active');
    
    return () => {
      if (timeline) {
        timeline.removeEventListener('mouseleave', handleMouseUp);
        timeline.removeEventListener('keydown', handleKeyboardNavigation);
      }
      // Remove the class when component unmounts
      document.body.classList.remove('timeline-active');
    };
  }, []);

  const handleDeleteEvent = (indexToDelete) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((_, index) => index !== indexToDelete));
    }
  };

  const handleEventClick = (event) => {
    if (!isDragging) {
      setSelectedEvent(event);
    }
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  // Calculate the width needed for all events plus some padding
  const timelineWidth = events.length * EVENT_SPACING + 300; // Added padding

  return (
    <div 
      ref={sectionRef} 
      className={`timeline-section ${isVisible ? 'start-animation' : ''}`}
    >
      
      <div className="timeline-outer-container">
        <div
          ref={scrollRef}
          className="timeline-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          role="region"
          aria-label="Timeline of events"
          tabIndex={0}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="timeline-content" style={{ width: `${timelineWidth}px` }}>
            <div className="timeline-event-container">
              <div className="timeline-full-line"></div>
              
              {events.map((_, index) => (
                <div 
                  key={`line-${index}`}
                  className="timeline-line-segment"
                  style={{
                    left: `${(index * EVENT_SPACING)}px`,
                    width: `${EVENT_SPACING}px`
                  }}
                />
              ))}
              {events.map((event, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    left: `${(index * EVENT_SPACING) + (EVENT_SPACING / 2)}px`,
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="timeline-dot" />
                  <TimelineEvent
                    {...event}
                    isTop={index % 2 === 0}
                    onDelete={() => handleDeleteEvent(index)}
                    onClick={() => handleEventClick(event)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="timeline-scroll-hint">
        Scroll horizontally to see more events →
      </div>
      
      {/* Modal appears when selectedEvent is not null */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Timeline;