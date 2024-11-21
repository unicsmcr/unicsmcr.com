const AddEventForm = ({ onClose, onAddEvent }) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      isKey: false,
      imageUrl: '',
      date: new Date().getFullYear().toString()
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddEvent(formData);
      onClose();
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-8 rounded-lg w-96">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-white font-bold">Add New Event</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Date</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Image URL</label>
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isKey}
                onChange={(e) => setFormData({...formData, isKey: e.target.checked})}
                className="mr-2"
              />
              <label className="text-gray-300">Key Event</label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    );
  };