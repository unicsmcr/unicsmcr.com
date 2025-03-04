import React, { useEffect } from 'react';
import { X, MapPin, Clock, Users, Calendar, ChevronLeft } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Mobile back button (only visible on small screens via CSS) */}
        <button
          className="modal-back-mobile"
          onClick={onClose}
          aria-label="Back to events"
        >
          <ChevronLeft size={16} />
          <span>Back</span>
        </button>
        
        <div className="modal-layout">
          {/* Left side - Image */}
          <div className="modal-image-section">
            <img
              src={event.imageUrl || '/api/placeholder/400/320'}
              alt={event.title}
              className="modal-image"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="modal-info-section">
            <div className="modal-header">
              <h2 className="modal-title">{event.title}</h2>
              <span className="modal-date">{event.date}</span>
            </div>
            
            <div className="modal-quick-info">
              <div className="modal-detail">
                <MapPin className="modal-icon" size={20} />
                <span>{event.location || 'Location TBA'}</span>
              </div>
              <div className="modal-detail">
                <Clock className="modal-icon" size={20} />
                <span>{event.time || 'Time TBA'}</span>
              </div>
              <div className="modal-detail">
                <Users className="modal-icon" size={20} />
                <span>{event.capacity || 'Capacity TBA'}</span>
              </div>
              <div className="modal-detail">
                <Calendar className="modal-icon" size={20} />
                <span>{event.status || 'Status TBA'}</span>
              </div>
            </div>
            
            <div className="modal-description">
              <h3>About the Event</h3>
              <p>{event.fullDescription || event.description || 'Details coming soon.'}</p>
            </div>
            
            {/* Commented out Requirements and Actions sections - kept as in original
            <div className="modal-info">
              <h3>Requirements</h3>
              <p>{event.requirements}</p>
            </div>
            <div className="modal-actions">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button primary"
              >
                Register Now
              </a>
              <button className="modal-button secondary">
                Add to Calendar
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;