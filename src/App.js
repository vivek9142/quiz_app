import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getQues} from './redux/actions/action';
import LoadingScreen from './components/Loader/LoadingScreen.component';

const Homepage = React.lazy(()=> import('./pages/Homepage/Homepage.page'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQues());
  }, [dispatch]);

  
  
  return (
      <>
        <React.Suspense fallback={<LoadingScreen/>}>
          <Homepage/>
        </React.Suspense>          
      </>
  );
}

export default App;
