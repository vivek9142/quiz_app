import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage/Homepage.page';
import './App.scss';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getQues} from './redux/actions/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQues());
  }, [dispatch]);
  
  return (
      <>
          <Homepage/>
      </>
  );
}

export default App;
