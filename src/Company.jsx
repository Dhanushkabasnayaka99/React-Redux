
import { useDispatch } from 'react-redux';
import { setName, setAge } from '../src/slices/NavSlices';

export default function Company() {
  const dispatch = useDispatch();

  const changeNavDetails = () => {
    
    dispatch(setName("NewName"));
    dispatch(setAge(Math.random()));
    console.log("hii");
  };

  return (
    <div>
      <h1>Parent page</h1>
      <button onClick={changeNavDetails}>Change Nav Details</button>
    </div>
  );
}
