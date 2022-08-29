import React, {useState} from 'react';

import './Users.css';

const USERS = [
  {id: 1, name: 'Tom', img: 'https://miro.medium.com/max/1400/0*bX1mygYPmp4pyypU.png'},
  {
    id: 2,
    name: 'Jerry',
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png'
  },
  {
    id: 3,
    name: 'Mickey',
    img: 'https://static.wikia.nocookie.net/characters/images/8/80/Mickey_Mouse.jpg'
  },
  {
    id: 4,
    name: 'Minnie',
    img: 'https://i.pinimg.com/564x/9a/f3/c1/9af3c1b6f380918cf55b9c0115f703d5.jpg'
  },
  {
    id: 5,
    name: 'Donald',
    img: 'https://static.wikia.nocookie.net/disney/images/d/db/Donald_Duck_Iconic.png'
  }
];

const Users = () => {
  const [filteredUsers, setFilteredUsers] = useState(USERS);

  const handleFilterUsersByName = (name) => {
    const normalizedName = name.trim().toLowerCase();
    const newUsers = USERS.filter((user) => user.name.toLowerCase().startsWith(normalizedName));
    setFilteredUsers(newUsers);
  };

  return (
    <div className="users">
      <input
        className="users__search"
        type="text"
        onInput={(event) => {
          handleFilterUsersByName(event.target.value);
        }}
      />
      {filteredUsers.length ? (
        <ul className="users__list list">
          {filteredUsers.map((user) => (
            <li className="list__card card" key={user.id}>
              <img className="card__img" src={user.img} alt={user.name} />
              <p className="card__info">{user.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No data based on your search</h3>
      )}
    </div>
  );
};

export default Users;
