import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

const ToDoList = () => {
  const [newItem, setNewItem] = useState([])
    const [items, setItems] = useState([]);
    const itemInput = useRef(null);

  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem("items"));
  //   if (!storage) {
  //     setStorage(storage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(storage));
  // }, [storage]);

  const handleSubmit = () => {
    setItems([...items, newItem])
    itemInput.current.value = "";
  }
  const handeInput = (e) => {
    setNewItem({name: e.target.value})
  }

  const deleteItem = (idx) => {
    let filteredItems = items.filter((item, i) =>  i !== idx)
    setItems(filteredItems)
  };

  return (
    <div className="minHeight">
      <Container fluid className="d-flex flex-column align-items-center  mt-4">
        <div className="card w-25 text-bg-light">
          <div className="card-body">
            <h1 className="card-title">To-Do List</h1>
            <div className="col-12 d-flex m-3">
              <div className="col-8 me-1">
                <input
                  className="form-control"
                  onChange={(e) => handeInput(e)}
                  ref={itemInput}
                />
              </div>
              <div>
                <button
                  className="btn purpleButton ms-3"
                  onClick={handleSubmit}
                >
                  Enter
                </button>
              </div>
            </div>
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