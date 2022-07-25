import React from "react";
import styled from "styled-components";

export default function SiteItem({ site }) {
  return (
    <div>
      {site.siteMapArea.map((area) => {
        return (
          <SiteListItem>
            <li className="site-item-title">{area.areaName}</li>
            {area.children.map((child) => {
              return (
                <li>
                  <a className="site-item" href={child.link} target="_blank">
                    {child.name}
                  </a>
                </li>
              );
            })}
          </SiteListItem>
        );
      })}
    </div>
  );
}

const SiteListItem = styled.ul`
  li {
    list-style: none;
    .site-item {
      display: block;
      color: #3d3d4e;
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .site-item-title {
    font-weight: 700;
    color: #000;
  }
`;
