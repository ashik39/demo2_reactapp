import React from 'react';

function ModalPopup(props) {
  if (props.state) {
    return (
      <div className="Modal-wrapper">
        <div className="popup">
          <div className="popup_inner">{props.children}</div>
        </div>
      </div>
    );
  }
  return null;
}

export default ModalPopup;
