import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

const ToDoList = () => {
  const [newItem, setNewItem] = useState({ name: "" });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [editInput, setEditInput] = useState("");
  const itemInput = useRef(null);

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      setItems(JSON.parse(lsItems));
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = () => {
    itemInput.current.value = "";
    if (newItem.name !== "") {
      setItems([...items, newItem]);
      setNewItem({ name: "" });
      setError(false);
    } else {
      setError(true);
    }
  };

  const handeInput = (e) => {
    setNewItem({ name: e.target.value, edited: false });
  };

  const handleEdit = (idx) => {
    const editedItems = JSON.parse(localStorage.getItem("items"));
    editedItems[idx].edited = true;
    setItems(editedItems);
    setEditInput(items[idx].name);
  };
  const submitEdit = (idx) => {
    if (editInput !== "") {
      const editedItems = JSON.parse(localStorage.getItem("items"));
      editedItems[idx] = { name: editInput, edited: false };
      setItems(editedItems);
    }
  };
  const handleEditInput = (e) => {
    setEditInput(e.target.value);
  };

  const deleteItem = (idx) => {
    let filteredItems = items.filter((_, i) => i !== idx);
    setItems(filteredItems);
  };

  return (
    <div className="minHeight mt-3">
      <Container
        fluid
        className="d-flex flex-column align-items-center container-lg"
      >
        <div className="card text-bg-light col-12 col-sm-12 col-md-9 col-lg-5">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">To-Do List</h1>
            <form
              className="col-12 d-flex mt-1 justify-content-center"
              onSubmit={(e) => e.preventDefault()}
            >
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
            {error && (
              <div className="text-danger text-center">
                Input must not be empty
              </div>
            )}
            <ul className="list-group mt-3">
              {items.length > 0 ? (
                items.map((item, idx) => (
                  <li
                    key={item + idx}
                    className="list-group-item d-flex justify-content-between"
                  >
                    {item.edited ? (
                      <div className=" col-3  col-md-5 col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={editInput}
                          onChange={
                            handleEditInput
                          }
                        />
                      </div>
                    ) : (
                      item.name
                    )}
                    <div>
                      <button
                        onClick={() => {
                          !item.edited ? handleEdit(idx) : submitEdit(idx);
                        }}
                        className="btn purpleButton me-1"
                      >
                        {!item.edited ? "Edit" : "Submit"}
                      </button>
                      <button
                        onClick={() => {
                          deleteItem(idx);
                        }}
                        className="btn purpleButton"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <div className="text-center">No items found!</div>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ToDoList;
