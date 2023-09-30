import { useState } from "react";

const ItemList = () => {
  const [dogNames, setDogNames] = useState([
    "Chula",
    "Koda",
    "Duffy",
    "Nunuk",
    "Lily",
    "Danya",
  ]);

  return (
    <div>
      <ul> My Mom has several dogs. The names are: </ul>
      {dogNames.map((names) => {
        return (
          <>
            <li>{names}</li>
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
