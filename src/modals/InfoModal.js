import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const InfoModal = ({show, onHide}) => {
    return (
        <Modal
           show={show}
           onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Drive Nara는 무엇인가?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>경로 저장소!</h4>
                <p>
                    Drive Nara는 평소에 드라이브를 가고 싶은곳을 미리 검색한 후, 즐겨찾기를 하여 경로를 찾는데 노력하지 않아도
                    바로바로 원하는 장소를 찾을 수 있는데 목적이 있습니다.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal;