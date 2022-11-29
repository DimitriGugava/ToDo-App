import "./MainContainer.css";
import LightBack from "../images/lightimagemobile.svg";
import DarkBack from "../images/darkimagemobile.svg";
import TODO from "../images/TODO.svg";
import Moon from "../images/moon.svg";

import Sun from "../images/sun.svg";
import { useState } from "react";
import CascadingToDo from "./CascadingToDo/CascadingToDo";
function MainContainer() {
  // Initialise the state as an empty array
  const [listToDo, setListToDo] = useState([]);

  const [showDark, setShowDark] = useState(true); // changes photo on the top into the dark theme
  const [dark, setDark] = useState(true); // cascading color change
  const [light, setlight] = useState(true); // cascading color change
  const [backDark, setBackDark] = useState(false); // sets dark background
  const [closeToDo, setCloseToDo] = useState(false); // when clicking X clothing todo
  const [selectedItem, setSelectedItem] = useState(false); // checkbox click and change color
  const [clearCheked, setClearChecked] = useState(true);
  const [inputTodo, setInputToDo] = useState();

  // When the `addTask` button is clicked, add a new empty object to the state
  const addTask = (event) => {
    const object = {
      text: inputTodo,
      checks: selectedItem,
      id: Math.floor(Math.random() * 50),
    };

    if (event.key === "Enter") {
      setListToDo([...listToDo, object]);
    }
  };

  const selectAllItem = (listToDo) => {
    setSelectedItem((selectedItem) => !selectedItem);
    return listToDo;
  };

  const textUpdate = (event) => {
    setInputToDo(event.target.value);
  };

  const clickClearChecked = () => {
    setClearChecked((clearCheked) => !clearCheked);
  };

  const selectItem = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setSelectedItem((selectedItem) => !selectedItem);
  };

  const clickCloseToDo = (id) => {
    const deleteToDo = listToDo.filter((object) => {
      return object.id !== id;
    });
    setListToDo(deleteToDo);
    console.log(deleteToDo);
    //clicks mivabit fliteri
  };

  const clearCompleted = (checks) => {
    setListToDo(listToDo.filter((object) => object.checks === !checks));
  };

  const clickDarkLight = (props) => {
    setBackDark((backDark) => !backDark);
    setShowDark((showDark) => !showDark);
    setDark((dark) => !dark);
  };

  const showActive = (event, checks, id) => {
    setListToDo(listToDo.filter((object) => object.checks != false));
  };

  const showCompleted = (event, checks, id) => {
    setListToDo(listToDo.filter((object) => object.id === id));
  };
  return (
    <div
      className="MainContainer"
      style={{ backgroundColor: backDark ? "black" : "" }}
    >
      {showDark ? (
        <img src={LightBack} className="backGroundLight" />
      ) : (
        <img src={DarkBack} className="backGroundLight" />
      )}
      <div className="containerHeader">
        <img src={TODO} className="todo" />
        {showDark ? (
          <img src={Moon} className="moon" onClick={clickDarkLight} />
        ) : (
          <img src={Sun} className="sun" onClick={clickDarkLight} />
        )}
      </div>
      {showDark ? (
        <div className="todoListContainer">
          <div className="checkAndInputBox">
            <input
              type="checkbox"
              className="checkbox"
              checks={selectedItem}
              onChange={selectItem}
            />
            <input
              onChange={textUpdate} //for input to make changes on another div using useState
              onKeyDown={addTask} // for click to detect on wich button we clicked
              value={inputTodo}
              type="text"
              className="todoInput"
              placeholder="Create a new todo…"
            />
          </div>
        </div>
      ) : (
        <div className="todoListContainerBlack">
          <div className="checkAndInputBox">
            <input
              type="checkbox"
              className="checkboxBlack"
              checks={selectedItem}
              onChange={selectItem}
            />
            <input
              onChange={textUpdate} //for input to make changes on another div using useState
              onKeyDown={addTask} // for click to detect on wich button we clicked
              value={inputTodo}
              type="text"
              className="todoInputBlack"
              placeholder="Create a new todo…"
            />
          </div>
        </div>
      )}{" "}
      <div className="toDoListContainer">
        {listToDo.map((newCascade) => {
          return (
            <CascadingToDo
              newDark={dark}
              inputTodo={newCascade.text}
              checks={newCascade.checks}
              id={newCascade.id}
              clickCloseToDo={clickCloseToDo}
              clearCompleted={clearCompleted}
              clickDarkLight={clickDarkLight}
            ></CascadingToDo>
          );
        })}
      </div>
      {showDark ? (
        <div className="itemleftclearcontainer">
          <div className="itemleftclearbox">
            <p className="itemleft">{listToDo.length} items left</p>
            <p onClick={clearCompleted} className="clearItem">
              Clear Completed
            </p>
          </div>
        </div>
      ) : (
        <div className="itemleftclearcontainerBlack">
          <div className="itemleftclearbox">
            <p className="itemleft">{listToDo.length} items left</p>
            <p onClick={clearCompleted} className="clearItem">
              Clear Completed
            </p>
          </div>
        </div>
      )}
      <div>
        {showDark ? (
          <div className="footerBox">
            <p onClick={showCompleted} className="footerText">
              Delete All
            </p>
            <p onClick={showActive} className="footerText">
              Delete Active
            </p>
          </div>
        ) : (
          <div className="footerBoxBlack">
            <p className="footerText" onClick={showCompleted}>
              Delete All
            </p>
            <p onClick={showActive} className="footerText">
              Delete Active
            </p>
          </div>
        )}
        <h2 className="lastText">Drag and drop to reorder list</h2>
      </div>
    </div>
  );
}

export default MainContainer;
