import React, { useState, useCallback } from "react";

function Hooks() {
  const [users, setUsers] = useState(data);

  const handleCount = (arr) => {
    console.log("카운트가 실행하네");
    return arr.length;
  };

  const count = handleCount(users);

  //   const handleClick = () => {
  //     const userList = [
  //       ...users,
  //       {
  //         id: 4,
  //         username: "add",
  //         email: "add@naver.com",
  //         active: true,
  //       },
  //     ];

  //     setUsers(userList);
  //   };

  const handleClick = useCallback(() => {
    const userList = [
      ...users,
      {
        id: 4,
        username: "add",
        email: "add@naver.com",
        active: true,
      },
    ];

    setUsers(userList);
  }, [users]);

  /**
   * 삭제
   */
  const handleRemove = () => {
    let userList = Array.from(users);
    userList.splice(0, 1);
    setUsers(userList);
  };

  return (
    <div>
      <p>카운트 : {count}</p>
      <div>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleRemove}>감소</button>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
    active: true,
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
    active: false,
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
    active: false,
  },
];

export default Hooks;
