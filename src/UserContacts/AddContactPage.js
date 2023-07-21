import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LOCAL_STORAGE_KEY } from "../const";
import { v4 as uuid4v } from "uuid";
import {
  addContact,
  // fetchAllContacts,
  // retriveContacts,
  // storageHandler,
} from "../utils/localStorage.util";
// import { Link } from "react-router-dom";
// import { redirect } from "react-router-dom";

const AddContactPage = () => {
  const popover = useRef();

  const addContactHandler = (contact) => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // const contacts = retriveContacts();
    // const newContacts = [...contacts, { id: uuid4v(), ...contact }];
    // storageHandler(newContacts);
    // const retriveContacts = fetchAllContacts();
    // const newContacts = [...retriveContacts, { id: uuid4v(), ...contact }];
    addContact({ id: uuid4v(), ...contact });
  };
  // const storageHandler = (contacts) => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleClose = () => {
    // popover.current.hidePopover();//for popover
    popover.current.close();
  };
  const addContacts = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      // alert("all fields are mandatory, please enter valid details");
      // popover.current.showPopover();
      popover.current.showModal();
      return;
    }
    // console.log({ name, email, phone });
    addContactHandler({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    // props.history.push("/contacts");
    navigate("/");
    // return <redirect to="/contacts" />;
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      {/* <div popover="manual" ref={popover}>
        <p>
          please all fields are mandatory, please enter valid
          <button
            onClick={handleClose}
            className="ui button mini red floated right main menu"
          >
            x
          </button>
        </p>
      </div> */}
      <dialog ref={popover}>
        all fields are mandatory, please enter valid details
        <button onClick={handleClose} className="ui button mini red ">
          close
        </button>
      </dialog>
      <form className="ui form" onSubmit={addContacts}>
        <div className="ui fields">
          <div className="ui six wide field">
            <label>Name</label>
            <input
              type="text"
              placeholder="enter name"
              name={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="ui six wide field">
            <label>Email</label>
            <input
              type="text"
              placeholder="enter email"
              name={email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="ui six wide  field">
            <label>Mobile</label>
            <input
              type="tel"
              placeholder="enter mobile number"
              name={phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button className="ui button blue"> Add</button>
      </form>
    </div>
  );
};

export default AddContactPage;
