import React from "react";
import ModalBody from "./modalbody";

export default function Modals({
  data,
  id,
  header,
  head2,
  styleGen,
  styleHeaders,
  styleHeaders2,
  styleModal,
}) {
  return (
    <div className="container" style={styleGen}>
      <h3
        style={styleHeaders}
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + id + "Modal"}
      >
        {header}
      </h3>
      <div
        className="modal fade"
        id={id + "Modal"}
        tabIndex="-1"
        aria-labelledby={id + "ModalLabel"}
        aria-hidden="true"
        style={styleModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={id + "ModalLabel"}>
                {head2}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <ModalBody data={data} styleHeaders2={styleHeaders2} />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
