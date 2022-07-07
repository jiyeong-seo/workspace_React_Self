import React, { useState } from "react";

export default function Table({
  columns: cols,
  height,
  data = [],
  rowHeight,
  onClick,
}) {
  const [row, setRow] = useState();
  const [columns, setColumns] = useState(cols);
  const [edit, setEdit] = useState();

  const handleDbClick = (rowNum, key) => {
    setEdit({
      rowNum,
      key,
    });
  };

  return (
    <div style={{ height, overflow: "auto", border: "1px solid #ccc" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <th key={col.key} style={{ width: col.width }}>
                  {col.colName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            // 행을 5개
            return (
              <tr
                key={`key_${i}`}
                style={{
                  height: rowHeight,
                  background: `${row === i + 1 ? "yellow" : ""}`,
                }}
                onClick={() => {
                  const no = i + 1;
                  setRow(no);
                  onClick && onClick(no, item); // 행 번호, 행이 가지고 정보
                }}
              >
                {columns.map((col) => {
                  // 열을 4개
                  return (
                    <td
                      key={col.key}
                      onDoubleClick={() => {
                        handleDbClick(i + 1, col.key);
                      }}
                    >
                      {edit &&
                      edit.rowNum === i + 1 &&
                      edit.key === col.key &&
                      col.isEdit ? (
                        <input value={item[col.key]} />
                      ) : (
                        item[col.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
