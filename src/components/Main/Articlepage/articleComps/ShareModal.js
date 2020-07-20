import React from "react";
import { Button, Modal } from "react-bootstrap";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

import { baseUrl } from "../../../../serverURL";
function ShareModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>Share this article.</Modal.Header>
      <Modal.Body>
        <WhatsappShareButton url={`http://amorcycle.com/#/article/${props.id}`}>
          {" "}
          <WhatsappIcon />
        </WhatsappShareButton>
      </Modal.Body>
    </Modal>
  );
}

export default ShareModal;
