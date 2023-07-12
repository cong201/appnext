import React from "react"
import { Modal, Button } from "react-bootstrap"

const login = () => {

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>SOIOT SYSTEM</Modal.Title>
                </Modal.Header>
                <form>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="User name" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    </div>
                </form>
                <Modal.Footer>
                    <Button variant="secondary">Đăng nhập</Button>
                    <Button variant="primary">Đăng kí</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default login