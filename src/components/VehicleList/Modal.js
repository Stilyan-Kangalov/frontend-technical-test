import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = ({
    visible,
    toggle,
    name,
    price,
    model,
    bodystyles,
    drivetrain,
    seats,
    emissions,
}) =>
    visible
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div className="modal-pop" role="dialog" aria-modal="true">
                      <h3>Jaguar {name}</h3>
                      <table className="modal-table">
                          <thead>
                              <tr>
                                  <td>Model year</td>
                                  <td
                                      className="modal-props"
                                      data-testid="test-modal--model"
                                  >
                                      {model}
                                  </td>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Price</td>
                                  <td
                                      className="modal-props"
                                      data-testid="test-modal--price"
                                  >
                                      {price}
                                  </td>
                              </tr>
                              <tr>
                                  <td>Body style</td>
                                  <td
                                      className="modal-props"
                                      data-testid="test-modal--bodystyles"
                                  >
                                      {bodystyles.toString()}
                                  </td>
                              </tr>
                              <tr>
                                  <td>Drivetrain</td>
                                  <td
                                      className="modal-props"
                                      data-testid="test-modal--drivetrain"
                                  >
                                      {drivetrain.toString()}
                                  </td>
                              </tr>
                              <tr>
                                  <td>Seats</td>
                                  <td
                                      className="modal-props"
                                      data-testid="test-modal--seats"
                                  >
                                      {seats}
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      colSpan="2"
                                      className="modal-emissions"
                                      data-testid="test-modal--emissions"
                                  >
                                      CO2 Emissions {emissions} g/km
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot onClick={toggle}>
                              <tr>
                                  <td colSpan="2">Close</td>
                              </tr>
                          </tfoot>
                      </table>
                  </div>
                  <div className="modal-overlay"></div>
              </div>,
              document.body
          )
        : null;

export default Modal;
