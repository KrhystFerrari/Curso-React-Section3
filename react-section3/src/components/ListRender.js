import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["João", "Pedro", "José"]);

    const [users] = useState([
        {id: 1, name: "Krhys", age: 30},
        {id: 3243262, name: "João", age: 28},
        {id: 564789, name: "Pedro", age: 18},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender