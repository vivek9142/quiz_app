import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getQues} from './redux/actions/action';
import LoadingScreen from './components/Loader/LoadingScreen.component';
import Homepage from './pages/Homepage/Homepage.page';
// const Homepage = React.lazy(()=> import('./pages/Homepage/Homepage.page'));

function App() {
  const [loading,setLoading] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQues());
    // setLoading(false)
  }, [dispatch]);

  useEffect(()=>{
    setLoading(false);
  },[]);
  
  return (
      <>
        {loading && <LoadingScreen/>}
        {/* <React.Suspense fallback={<LoadingScreen/>}> */}
          {!loading && <Homepage/>}
        {/* </React.Suspense>           */}
      </>
  );
}

export default App;
