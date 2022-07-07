import React from "react";
import { Row, Col, Table, Pagination } from "antd";

import Search from "../../molecules/Search_bak";

import { defaultQuery } from "../../../config/utils/network";

/**
 * 게시판
 * @returns
 */
const Board = () => {
  const handleSearch = async (values) => {
    const { searchCondition, searchKeyword } = values;

    const payload = {
      pageIndex: 1, // 페이지번호
      pageSize: 10, // 게시물 갯수
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
      bbsId: "BBSMSTR_000000000081", // 게시판 고유번호(공지사항)
      siteId: "SITE_000000000000001", // 사이트 고유번호
    };

    const response = await defaultQuery("/api/article/findAll", payload, {});
    console.log("response ===> ", response);
  };

  return (
    <div style={{ padding: 30 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: "전체", value: "" },
              { label: "제목", value: "1" },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Pagination defaultCurrent={1} total={2} />
        </Col>
      </Row>
    </div>
  );
};

/** 컬럼 */
const columns = [
  {
    title: "No.",
    dataIndex: "",
    key: "",
  },
  {
    title: "제목",
    dataIndex: "",
    key: "",
  },
  {
    title: "작성일",
    dataIndex: "",
    key: "",
  },
  {
    title: "첨부파일",
    dataIndex: "",
    key: "",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

export default Board;
