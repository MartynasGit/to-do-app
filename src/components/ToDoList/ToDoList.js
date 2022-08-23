import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

const ToDoList = () => {
  const [newItem, setNewItem] = useState({ name: "" });
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      setItems(JSON.parse(lsItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    itemInput.current.value = "";
    if (newItem.name !== "") {
      setItems([...items, newItem]);
      setNewItem({ name: "" });
    }
  };

  const handeInput = (e) => {
    setNewItem({ name: e.target.value, done: false });
  };

  const handleEdit = (idx) => {
    let newName = prompt("New task");
    let filteredItems = items.filter((_, i) => i === idx);
    console.log(filteredItems[0].name);
    setItems(items.replace(filteredItems[0].name, newName));
  };

  const deleteItem = (idx) => {
    let filteredItems = items.filter((_, i) => i !== idx);
    setItems(filteredItems);
  };

  return (
    <div className="minHeight p-5">
      <Container fluid className="d-flex flex-column align-items-center">
        <div className="card w-50 text-bg-light">
          <div className="card-body">
            <h1 className="card-title text-center">To-Do List</h1>
            <form className="col-12 d-flex m-3 justify-content-center pe-3">
              <div className="col-5">
                <input
                  className="form-control"
                  onChange={(e) => handeInput(e)}
                  ref={itemInput}
                />
              </div>
              <div>
                <button
                  className="btn purpleButton ms-3"
                  onClick={(e) => handleSubmit(e)}
                >
                  Enter
                </button>
              </div>
            </form>
            <ul className="list-group">
              {items.length > 0 ? (
                items.map((item, idx) => (
                  <li key={idx} className="list-group-item">
                    {item.name}
                    <button
                      onClick={() => {
                        deleteItem(idx);
                      }}
                      className="btn purpleButton float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(idx);
                      }}
                      className="btn purpleButton float-end mx-2"
                    >
                      Edit
                    </button>
                  </li>
                ))
              ) : (
                <div>No items found!</div>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ToDoList;
