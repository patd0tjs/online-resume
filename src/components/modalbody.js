import React from "react";

export default function ModalBody({ data, styleHeaders2 }) {
  var mydata = {
    data: data,
  };
  return (
    <div class="modal-body">
      {mydata.data.map((data) => (
        <React.Fragment>
          <h5 style={styleHeaders2}>{data.header}</h5>
          <ul>
            <li>{data.sub}</li>
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}
