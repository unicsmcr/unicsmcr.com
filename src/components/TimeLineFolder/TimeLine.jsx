import React, { useState, useRef, useEffect } from 'react';
import TimelineEvent from './TimelineEvent';
import './Timeline.css';

const Timeline = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [events, setEvents] = useState([
    {
      title: 'Pub Crawler',
      description: '',
      isKey: true,
      imageUrl: 'pubcrawler.png',
      date: '2025/02/06'
    },
    {
      title: 'Roku',
      description: 'Networking enet',
      isKey: true,
      imageUrl: 'roku.png',
      date: '2025/02/06'
    },
    {
      title: 'Student Hack',
      description: 'Hackhaton',
      isKey: true,
      imageUrl: 'uniHack.jpg',
      date: '2025'
    },
    {
      title: 'May Ball',
      description: 'Social event',
      isKey: true,
      imageUrl: '',
      date: 'May 2025'
    },
    {
      title: 'Great Uni Hack',
      description: 'Hackhaton',
      isKey: true,
      imageUrl: 'GreatHack.png',
      date: '2026'
    }
  ]);

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
    return () => {
      if (timeline) {
        timeline.removeEventListener('mouseleave', handleMouseUp);
        timeline.removeEventListener('keydown', handleKeyboardNavigation);
      }
    };
  }, []);

  const handleDeleteEvent = (indexToDelete) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`timeline-section ${isVisible ? 'start-animation' : ''}`}
    >
      <h2 className="events-title">EVENTS</h2>
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
        <div className="timeline-content" style={{ width: `${events.length * 200 + 200}px` }}>
          <div className="timeline-event-container">
            {events.map((_, index) => (
              <div 
                key={`line-${index}`}
                className="timeline-line-segment"
                style={{
                  left: `${(index * 300)}px`,
                  width: '300px'
                }}
              />
            ))}
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
                  onDelete={() => handleDeleteEvent(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="timeline-scroll-hint">
        Scroll horizontally to see more events →
      </div>
    </div>
  );
};

export default Timeline;