import React from 'react';
import PropTypes from 'prop-types';

const TimelineEvent = ({ title, description, isKey, isTop, date, imageUrl }) => (
  <div className={`timeline-event-wrapper ${isTop ? 'top' : 'bottom'}`}>
    {/* Image Box */}
    <div className="timeline-event">
      {isKey && imageUrl && (
        <div className="timeline-event-image-container">
          <img
            src={imageUrl}
            alt={title || 'Event image'}
            className="timeline-event-image"
            onError={(e) => {
              e.target.src = '/api/placeholder/400/320';
              e.target.onerror = null;
            }}
          />
        </div>
      )}
    </div>
    {/* Content Outside Box */}
    <div className="timeline-event-content">
      <span className="timeline-event-date">{date}</span>
      <h3 className="timeline-event-title">{title}</h3>
      {description && (
        <p className="timeline-event-description">{description}</p>
      )}
    </div>
  </div>
);

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isKey: PropTypes.bool,
  isTop: PropTypes.bool,
  date: PropTypes.string,
  imageUrl: PropTypes.string
};

TimelineEvent.defaultProps = {
  isKey: false,
  isTop: false,
  description: '',
  date: '',
  imageUrl: ''
};

export default TimelineEvent;