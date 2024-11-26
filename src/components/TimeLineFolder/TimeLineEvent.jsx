// src/components/TimeLineFolder/TimelineEvent.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TimelineEvent = ({ title, description, isKey, isTop, date, onDelete, imageUrl }) => (
  <div className={`timeline-event-wrapper ${isTop ? 'top' : 'bottom'}`}>
    <div className="timeline-event">
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full 
                   flex items-center justify-center hover:bg-red-600 z-10"
        >
          ×
        </button>
      )}

      {isKey && imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="timeline-event-image"
          onError={(e) => {
            e.target.src = '/api/placeholder/400/320';
            e.target.onerror = null;
          }}
        />
      )}

      <div className="timeline-event-content">
        <span className="timeline-event-date">{date}</span>
        <h3 className="timeline-event-title">{title}</h3>
        {description && (
          <p className="timeline-event-description">{description}</p>
        )}
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
  onDelete: PropTypes.func
};

TimelineEvent.defaultProps = {
  isKey: false,
  isTop: false,
  description: '',
  date: '',
  imageUrl: ''
};

export default TimelineEvent;