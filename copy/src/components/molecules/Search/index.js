import React from "react";
import { Row, Col, Select, Input, Form } from "antd";

/**
 * 공통 검색
 * const options = [{label : "전체", value: ""}, {label : "제목", value: "1"}]
 * @param {} param0
 * @returns
 */

export default function Search({ options = [], onSearch }) {
  // form을 제어할 수 있는 객체 - ant desing 문법
  const [form] = Form.useForm();

  // 검색 버튼 클릭 이벤트 핸들러
  const handelSearch = () => {
    form.submit();
  };

  // form.submit 호출시 실행되는 이벤트 핸들러
  const handleFinish = (values) => {
    onSearch && onSearch(values);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "right" }}>
        <Form layout="inline" form={form} onFinish={handleFinish}>
          {/* name 속성 => form.item들 구분  */}
          <Form.Item name="searchCondition">
            <Select style={{ width: 150 }}>
              {options.map((option) => {
                return (
                  <Option value={option?.value}>{option?.label || ""}</Option>
                );
              })}
              {/* <Option value="">전체</Option>
              <Option value="1">제목</Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="searchKeyword">
            <Input.Search
              style={{ width: 200 }}
              placeholder="검색어를 입력
        "
              onSearch={handelSearch}
              enterButton
            ></Input.Search>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const { Option } = Select;

// 아래와 같이 사용 가능하다
// search 를 testsearch 로 변경
// const { Search: TestSearch } = Input;
