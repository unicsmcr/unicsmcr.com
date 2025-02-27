import React from 'react';
import PropTypes from 'prop-types';

const TimelineEvent = ({ 
  title, 
  description, 
  isKey, 
  isTop, 
  date, 
  imageUrl,
  onClick 
}) => (
  <div className={`timeline-event-wrapper ${isTop ? 'top' : 'bottom'}`}>
    <div 
      className="timeline-event"
      style={{
        backgroundImage: `url(${imageUrl || '/api/placeholder/400/320'})`
      }}
    >
      <div className="timeline-event-overlay">
        <div className="timeline-event-content">
          <div className="timeline-event-text">
            <span className="timeline-event-date">{date}</span>
            <h3 className="timeline-event-title">{title}</h3>
          </div>
          <div className="timeline-event-bottom">
            <p className="timeline-event-description">{description}</p>
            <button onClick={onClick } className="timeline-event-button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isKey: PropTypes.bool,
  isTop: PropTypes.bool,
  date: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func
};

TimelineEvent.defaultProps = {
  isKey: false,
  isTop: false,
  description: '',
  date: '',
  imageUrl: '',
  onClick: () => {}
};

export default TimelineEvent;