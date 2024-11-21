const TimelineEvent = ({ title, description, imageUrl, isKey, isTop, date, onDelete }) => (
    <div className={`absolute transform ${isTop ? '-translate-y-full -mt-4' : 'mt-4'}`}>
      {/* Vertical connection line */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-purple-500"
        style={{ top: isTop ? '100%' : '-2rem' }} 
      />
      
      {/* Content */}
      <div className="w-64 flex flex-col items-center relative">
        {/* Delete button for admin */}
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
          <div className="w-full h-40 mb-2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <div className="text-center">
          <span className="text-purple-400 text-sm">{date}</span>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
  