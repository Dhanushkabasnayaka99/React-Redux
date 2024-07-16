import { useSelector } from "react-redux";
import { selectName, selectAge } from "../src/slices/NavSlices";

export default function Employee() {
  const name = useSelector(selectName);
  const age = useSelector(selectAge);

  return (
    <div>
      <h2>Employee</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
