import "./CascadingToDo.css";
import Xshape from "../../images/xShape.svg";
import { useState } from "react";

function CascadingToDo(props) {
  return (
    <div>
      {props.newDark ? (
        <div className="cascadingListContainer">
          <div className="checkAndInputCascading">
            <input
              type="checkbox"
              checked={props.checks}
              className="cascadingcheckbox"
            />
            <div
              className="cascadingtodoInput"
              style={{ color: props.closeToDo ? "grey" : "" }}
            >
              {props.inputTodo}
            </div>
            <img
              src={Xshape}
              className="xShape"
              onClick={() => props.clickCloseToDo(props.id)}
            />
          </div>
        </div>
      ) : (
        <div className="cascadingListContainerBlack">
          <div className="checkAndInputCascading">
            <input
              type="checkbox"
              checked={props.checks}
              className="cascadingcheckbox"
            />
            <div
              className="cascadingtodoInput"
              style={{ color: props.closeToDo ? "grey" : "" }}
            >
              {props.inputTodo}
            </div>
            <img
              src={Xshape}
              className="xShape"
              onClick={() => props.clickCloseToDo(props.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CascadingToDo;
