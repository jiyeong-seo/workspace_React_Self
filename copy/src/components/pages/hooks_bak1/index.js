import React, { useState, useMemo, useCallback } from "react";

const Hooks = () => {
  const [users, setUsers] = useState(data);
  const [testCount, setCestCount] = useState(1);

  const handleCount = (arr) => {
    console.log("카운트가 실행하네");
    return arr.length;
  };

  //   const count = handleCount(users);
  const count = useMemo(() => {
    return handleCount(users);
  }, [users]);

  /**
   * 유저 정보 증가
   */
  const handleClick = useCallback(() => {
    const userList = [
      ...users,
      {
        id: users.length + 1,
        username: "add",
        email: "add@naver.com",
        active: true,
      },
    ];

    setUsers(userList);
  }, [users]);

  /**
   * 유저 정보 삭제
   */
  const handleRemove = () => {
    let userList = Array.from(users); // 깊은 복사
    userList.splice(0, 1);
    setUsers(userList);
  };

  /**
   * 테스트
   */
  const handleTestClick = () => {
    setCestCount((preTestCount) => {
      return preTestCount + 1;
    });
  };

  return (
    <div>
      <p>테스트 카운트 : {testCount}</p>
      <p>카운트 : {count}</p>
      <div>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleRemove}>삭제</button>
        <button onClick={handleTestClick}>test</button>
      </div>
    </div>
  );
};

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
