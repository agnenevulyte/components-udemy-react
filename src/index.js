import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail.js'
import faker from "faker";
import ApprovalCard from "./ApprovalCard.js";

export default function App() {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Nice blog post"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Luis"
                timeAgo="Today at 2:00AM" 
                comment="Nice blog post!!!!!!!!!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Joana"
                timeAgo="Yesterday at 5:45PM"
                comment="Ugly blog post"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>

    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
