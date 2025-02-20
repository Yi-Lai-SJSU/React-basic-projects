import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content"> {props.children} </div>
            <div className="extra content">
                <div className = "ui basic green button">Approve</div>
                <div className = "ui basis red button">Decline</div>
            </div>
        </div>
    );
};

export default ApprovalCard;
