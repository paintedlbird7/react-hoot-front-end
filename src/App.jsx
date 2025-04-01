import { useContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import HootList from './components/HootList/HootList';
import * as hootService from './services/hootService';
import HootDetails from './components/HootDetails/HootDetails';
import HootForm from './components/HootForm/HootForm';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';


const App = () => {

const navigate = useNavigate();

const handleAddHoot = async (hootFormData) => {
  // console.log('hootFormData', hootFormData);
  const newHoot = await hootService.create(hootFormData);
  setHoots([newHoot, ...hoots]);
  navigate('/hoots');
};

// src/App.jsx

const handleDeleteHoot = async (hootId) => {
  const deletedHoot = await hootService.deleteHoot(hootId);
  // Filter state using deletedHoot._id:
  setHoots(hoots.filter((hoot) => hoot._id !== deletedHoot._id));
  navigate('/hoots');
};



  const [hoots, setHoots] = useState([]);
  // src/App.jsx
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();
      // console log to verify data in the console
      // console.log('hootsData:', hootsData);
      setHoots(hootsData);
    };
    if (user) fetchAllHoots();
    // only fetch hoots when a user is logged in
  }, [user]); // adding user dependency because the effect depends on the user to run

  return (
    <>
      <NavBar />
      <Routes>
      // src/App.jsx

<Route 
  path='/hoots/new' 
  element={<HootForm handleAddHoot={handleAddHoot} />}
/>
<Route path='/hoots/new' element={<h1>New Hoot</h1>} />
<Route 
              path='/hoots/:hootId'
              element={<HootDetails handleDeleteHoot={handleDeleteHoot}/>}
            />
        <Route path='/hoots' element={<HootList hoots={hoots} />} />
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            {/* Protected routes (available only to signed-in users) */}
            <Route path='/hoots' element={<HootList />} />
          </>
        ) : (
          <>
            {/* Non-user routes (available only to guests) */}
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );

};

export default App;
