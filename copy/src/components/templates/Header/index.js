import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
/** reducer의 action */
import { setIsLoading } from "../../../store/common/reducer";

import { defaultQuery } from "../../../config/utils/network";

import { setMenuList } from "../../../store/menu/reducer";

export default function Header() {
  // store 에 값을 전달하는 훅
  const dispatch = useDispatch();
  // 셀렉터가 메모리에 접근 -> state 안에서 state.menu값 가져옴
  const { menuList } = useSelector((state) => state.menu);

  console.log(menuList);

  const [menus, setMenus] = useState([]);

  /** 메뉴 목록 조회 */
  const findAllMenu = async () => {
    try {
      const { data } = await defaultQuery(`/api/admin/menu/selectMenuList`, {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 100,
        searchCondition: "",
        searchKeyword: "",
      });

      if (data) {
        // data?.resultList 도 가능
        const { resultList } = data;
        // store 에 값을 전달
        dispatch(setMenuList(resultList));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  /** 메뉴 클릭 */
  const handleClick = () => {
    /** dispatch 안에 값을 전달해야 store에 전달된다. */
    /** 값으로 전달한 setIsLoading 은 action이기 때문에 action에 값을 넣어주면 reducer가 그 값을 캐치해서 메모리에 올린다.  */
    dispatch(setIsLoading(true));
  };

  /** 페이지 마운트시 한 번만 실행 */
  useEffect(() => {
    if (menuList.length <= 0) {
      // 통신시 값을 올린다 -> setisLoading엑션에 통신을 하기 전에 ture를 전달
      dispatch(setIsLoading(true));
      // store의 메모리 값 중 menuList 값이 있으면 통신을 하지 않음
      findAllMenu();
    }
  }, []);

  useEffect(() => {
    if (menuList.length > 0) {
      setMenus(menuList);
    }
  }, [menuList]);

  return (
    <Menu mode="horizontal">
      {menus.map((menu, i) => {
        return (
          <Link key={menu.menuNo} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
      <Menu.Item onClick={handleClick}>게시판</Menu.Item>
      {/* {menuList.map((menu, i) => {
        return (
          <Link key={i} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })} */}
    </Menu>
  );
}

const params = [
  {
    rnum: 2,
    atchFileId: "",
    bbsId: "BBSMSTR_000000000091",
    frstRegisterId: "admin",
    frstRegisterPnttm: "2021-04-27",
    lastUpdusrId: "",
    lastUpdusrPnttm: "",
    ntceBgnde: "20210427",
    ntceEndde: "20210531",
    ntcrId: "",
    ntcrNm: "",
    nttCn: "게시글 작성 API는 어디로 갈까요??",
    nttId: 191,
    nttNo: 0,
    nttSj: "게시글 작성 테스트 입니다.",
    parnts: "0",
    password: "",
    inqireCo: 5,
    replyAt: "Y",
    replyLc: "0",
    sortOrdr: 0,
    useAt: "Y",
    ntceEnddeView: "",
    ntceBgndeView: "",
    noticeAt: "N",
    secretAt: "N",
    sjBoldAt: null,
    blogAt: "",
    blogId: "",
    siteId: "",
    searchBgnDe: "",
    searchCnd: "",
    searchEndDe: "",
    searchWrd: "",
    searchUseYn: "",
    pageIndex: 1,
    pageUnit: 10,
    pageSize: 10,
    firstIndex: 1,
    lastIndex: 1,
    recordCountPerPage: 10,
    rowNo: 0,
    frstRegisterNm: "",
    lastUpdusrNm: "",
    isExpired: "N",
    parntsSortOrdr: "",
    parntsReplyLc: "",
    bbsTyCode: "",
    bbsAttrbCode: "",
    bbsNm: "",
    fileAtchPosblAt: "",
    posblAtchFileNumber: 0,
    replyPosblAt: "",
    plusCount: false,
    anonymousAt: "",
    subPageIndex: "",
    commentCo: "1",
  },
  {
    rnum: 1,
    atchFileId: "",
    bbsId: "BBSMSTR_000000000091",
    frstRegisterId: "admin",
    frstRegisterPnttm: "2021-04-12",
    lastUpdusrId: "",
    lastUpdusrPnttm: "",
    ntceBgnde: "",
    ntceEndde: "",
    ntcrId: "",
    ntcrNm: "",
    nttCn: "게시글 작성 테스트",
    nttId: 181,
    nttNo: 0,
    nttSj: "게시글 작성 old",
    parnts: "0",
    password: "",
    inqireCo: 6,
    replyAt: "Y",
    replyLc: "0",
    sortOrdr: 0,
    useAt: "Y",
    ntceEnddeView: "",
    ntceBgndeView: "",
    noticeAt: "N",
    secretAt: "N",
    sjBoldAt: null,
    blogAt: "",
    blogId: "",
    siteId: "",
    searchBgnDe: "",
    searchCnd: "",
    searchEndDe: "",
    searchWrd: "",
    searchUseYn: "",
    pageIndex: 1,
    pageUnit: 10,
    pageSize: 10,
    firstIndex: 1,
    lastIndex: 1,
    recordCountPerPage: 10,
    rowNo: 0,
    frstRegisterNm: "",
    lastUpdusrNm: "",
    isExpired: "N",
    parntsSortOrdr: "",
    parntsReplyLc: "",
    bbsTyCode: "",
    bbsAttrbCode: "",
    bbsNm: "",
    fileAtchPosblAt: "",
    posblAtchFileNumber: 0,
    replyPosblAt: "",
    plusCount: false,
    anonymousAt: "",
    subPageIndex: "",
    commentCo: "",
  },
];
