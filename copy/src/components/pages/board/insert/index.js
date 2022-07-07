import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";

import { Row, Col, Button, Modal, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";

import FroalaEditor from "react-froala-wysiwyg";

import { defaultQuery } from "../../../../config/utils/network/index";

// 게시판 상세 페이지
const BoardInsert = () => {
  // Form 에 직접 접근할 수 있게 연결
  const [form] = Form.useForm();

  let navigate = useNavigate();

  /** 2. state로 전달받은 값을 세팅  */
  const [params] = useState({
    siteId: "SITE_000000000000001",
    bbsId: "BBSMSTR_000000000091",
  });

  // FroalaEditor 에 값 대입
  const [model, setModel] = useState();

  // handlefinish 핸들러 호출시 실행
  const boardUpdate = async (payload) => {
    try {
      const { data } = await defaultQuery("/api/article/save", payload);
      if (data) {
        const { result } = data;
        if (result === 1) {
          // 성공
          Modal.success({
            content: "등록하였습니다.",
            okText: "확인",
            // ok 버튼 누를 시 호출
            onOk: () => {
              navigate("/board");
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancle = () => {
    confirm({
      title: "",
      content: "페이지를 벗어나시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk() {
        navigate("/board");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // modle 값 변경시 modle state 변경하는 이벤트 핸들러
  const handleModelChange = (value) => {
    setModel(value);
  };

  // 저장 버튼 클릭시 저장 이벤트 핸들러
  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values) => {
    const { nttSj, nttCn } = values;

    const payload = {
      ...params,
      nttSj,
      nttCn: model,
    };

    boardUpdate(payload);
  };

  return (
    <div>
      <Form form={form} onFinish={handleFinish}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Form.Item name="nttSj">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            // dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}
          >
            <Form.Item name="nttCn">
              <FroalaEditor
                tag="textarea"
                model={model}
                onModelChange={handleModelChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={handleSubmit}>
              저장
            </Button>
            <Button onClick={handleCancle}>취소</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const { confirm } = Modal;

export default BoardInsert;
