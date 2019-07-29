import React from "react";
// import faker from "faker";
import ApprovalCard from "./ApprovalCard.js";

export default function CommentDetail(props) {
  return (
    <div className="ui cards">
      <div className="ui card">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>

            <div className="metadata">
              <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
