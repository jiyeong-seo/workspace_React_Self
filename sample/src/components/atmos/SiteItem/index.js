import React from "react";
import styled from "styled-components";

export default function SiteItem({ data, title, listName, listLink }) {
  return (
    <SiteItemWrap>
      <ul>
        <li className="title">{data[title]}</li>
        {data.children.map((child) => {
          console.log(child);
          return (
            <li>
              <a href={child[listLink]} target="_blank">
                {child[listName]}
              </a>
            </li>
          );
        })}
      </ul>
    </SiteItemWrap>
  );
}

const SiteItemWrap = styled.div`
  ul {
    li {
      list-style-type: none;

      a {
        display: inline-block;
        margin-top: 20px;
        color: #3d3d4e;
      }
    }

    .title {
      font-weight: 900;
      a {
        color: #000;
      }
    }
  }
`;
