import React, { useEffect, useState } from "react";
import { Row, Col, Table, Pagination, Button } from "antd";
import { useNavigate } from "react-router-dom";

import Search from "../../molecules/Search";
import { defaultQuery } from "../../../config/utils/network";

const Board = () => {
  let navigate = useNavigate();
  // 파라미터
  const [params, setParams] = useState({
    pageIndex: 1,
    pageSize: 10,
    bbsId: "BBSMSTR_000000000091", // 게시판 고유번호(공지사항)
    siteId: "SITE_000000000000001", // 사이트 고유번호
  });
  // 결과 값
  const [dataSource, setDataSource] = useState(() => []);
  // 페이지 정보
  const [paging, setPaging] = useState();

  const handleSearch = async (values) => {
    const { searchCondition, searchKeyword } = values;

    const payload = {
      ...params,
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
    };

    // API 호출
    boardList(payload);
  };

  const boardList = async (values) => {
    // bbsId: "게시판 아이디"
    // siteId: "사이트 아이디"
    // pageSize : 10
    const payload = {
      ...values,
    };
    const response = await defaultQuery("/api/article/findAll", payload);
    const { data } = response;

    if (data) {
      const { paginationInfo, resultList } = data;
      setDataSource(resultList);
      setPaging(paginationInfo);
    }

    setParams(payload);
  };
  // 마운트 시 한 번 호출
  // 콜백 : 실행시 API 통신해서 데이터 가져오는 콜백함수
  useEffect(() => {
    boardList(params);
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: "전체", value: "" },
              { label: "제목", value: "1" },
              { label: "본문", value: "2" },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            onRow={(record, index) => {
              return {
                onClick: (event) => {
                  navigate(`/board/detail/${record.nttId}`);
                },
              };
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Pagination
            defaultCurrent={1}
            current={paging?.currentPageNo}
            total={paging?.totalRecordCount}
            // onChange는 pageIndex 인자로 전달
            onChange={(pageIndex) => {
              const payload = {
                ...params,
                pageIndex,
              };

              boardList(payload);
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button
            onClick={() => {
              navigate("/board/insert");
            }}
          >
            글쓰기
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const columns = [
  {
    title: "No.",
    dataIndex: "rnum",
    key: "rnum",
    width: 80,
  },
  {
    title: "제목",
    dataIndex: "nttSj",
    key: "nttSj",
  },
  {
    title: "작성일",
    dataIndex: "frstRegisterPnttm",
    key: "frstRegisterPnttm",
    width: 150,
  },
  {
    title: "첨부파일",
    dataIndex: "atchFileId",
    key: "atchFileId",
    width: 150,
  },
];

export default Board;
