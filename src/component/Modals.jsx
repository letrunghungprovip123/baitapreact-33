import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Modals(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.doiGiay.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-6">
            <img src={props.doiGiay.image} alt="" width="100%" />
          </div>
          <div className="col-lg-6">
            <h4 className="mb-5">Shoe Detail</h4>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <th scope="row">ID:</th>
                  <td>{props.doiGiay.id}</td>
                </tr>
                <tr>
                  <th scope="row">Name:</th>
                  <td>{props.doiGiay.name}</td>
                </tr>
                <tr>
                  <th scope="row">Alias:</th>
                  <td>{props.doiGiay.alias}</td>
                </tr>
                <tr>
                  <th scope="row">Price:</th>
                  <td>${props.doiGiay.price}</td>
                </tr>
                <tr>
                  <th scope="row">Quantity:</th>
                  <td>{props.doiGiay.quantity}</td>
                </tr>
                <tr>
                  <th scope="row">Description:</th>
                  <td>{props.doiGiay.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark">Buy Now</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
