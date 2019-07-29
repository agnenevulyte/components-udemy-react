import React from 'react';

export default function ApprovalCard(props) {
    return (
    <div class="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
      </div>
    </div>
    )
}
