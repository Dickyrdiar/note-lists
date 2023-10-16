/* eslint-disable react/prop-types */
const PopupForm = ({ 
  showModal, 
  closeModal, 
  titleNote, 
  handleChangeNote, 
  descNote,
  handleChangeDesc,
  handleSubmit
}) => {
  const modalClasses = showModal ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';

  return (
    <div className={modalClasses}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal} />

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Modal Content */}
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-xl font-semibold mb-4">Add new NoteList</h2>
          <p className="text-gray-700 mb-8">create your new note.</p>

          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title note
              </label>

              <input 
                type='text'
                id="title"
                name='title'
                value={titleNote}
                onChange={handleChangeNote}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                Description Note
              </label>

              <textarea 
                id='text'
                name='text'
                value={descNote}
                onChange={handleChangeDesc}
                className="mt-1 p-2 border rounded-md w-full"
                rows='5'
                required
              ></textarea>
            </div>

            <div className="modal-close cursor-pointer mb-8" onClick={closeModal}>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md w-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            <div className="modal-close cursor-pointer mb-8" onClick={closeModal}>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md w-full"
                onClick={closeModal}
              >
                
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
