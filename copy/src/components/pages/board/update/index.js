import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";

import { Row, Col, Button, Modal, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";

import FroalaEditor from "react-froala-wysiwyg";

import { defaultQuery } from "../../../../config/utils/network/index";

// 게시판 상세 페이지
const BoardDetail = () => {
  // Form 에 직접 접근할 수 있게 연결
  const [form] = Form.useForm();

  let navigate = useNavigate();
  /** 1. match : params 를 조회 (라우트를 통해 전달된 값들) */
  // 인자로 url을 넘기면 해당 url과 일치할 경우 url의 정보를 반환하고,
  // 일치하지 않을 경우 null을 반환
  const {
    params: { id },
  } = useMatch("/board/update/:id");

  /** 2. state로 전달받은 값을 세팅  */
  const [params] = useState({
    siteId: "SITE_000000000000001",
    bbsId: "BBSMSTR_000000000091",
    nttId: id,
  });
  // FroalaEditor 에 값 대입
  const [model, setModel] = useState();

  // 상세정보
  const [detail, setDetail] = useState();

  /** 4. 게시판 상세정보 API 실행 */
  // 게시판 상세 정보
  const boardDetail = async () => {
    const { data } = await defaultQuery("/api/article/find", params);

    if (data) {
      const { result } = data;
      setDetail(result);
    }
  };

  // handlefinish 핸들러 호출시 실행
  const boardUpdate = async (payload) => {
    try {
      const { data } = await defaultQuery("/api/article/save", payload);
      if (data) {
        const { result } = data;
        if (result === 1) {
          // 성공
          Modal.success({
            content: "수정하였습니다.",
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

  /** 3. 마운트가 되었을 때 상세보기 API 호출 */
  useEffect(() => {
    boardDetail();
  }, []);
  // [] 페이지가 마운트 되었을 때 1회만 호출

  /** 5. detail state 값 변경이 있고 값이 존재한다면 form.item의 값 주입 */
  useEffect(() => {
    if (detail) {
      form.setFieldsValue({
        nttSj: detail.nttSj,
        // nttCn: detail.nttCn
      });
      setModel(detail.nttCn);
    }
  }, [detail]);

  return (
    <div>
      <Form form={form} onFinish={handleFinish}>
        <Row>
          <Col span={24}>
            <Row>
              {/* <Col flex={1}>{detail?.nttSj || ""}</Col> */}
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

export default BoardDetail;
