import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../../assets/user.png'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-transparent p-4 fixed z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 
            className="text-indigo-600 text-2xl ml-2 cursor-pointer"
            onClick={() => history('/')}
          >
            NoteList
          </h1>
        </div>
        <div className="flex items-center">
          <img
            src={UserLogin} // Replace with your user image path
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <button
            className="ml-4 text-white hover:underline"
            onClick={() => toggleDropdown}
          >
            User Name
          </button>
          {isDropdownOpen && (
            <div className="mt-2 p-2 bg-white rounded-lg shadow-lg absolute right-0">
              <button
                className="w-full text-left py-1 hover:bg-gray-200"
                // onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
