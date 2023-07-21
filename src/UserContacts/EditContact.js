import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, updateContact } from "../utils/localStorage.util";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const popover = useRef();
  // const [state, setState] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetchContact(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchContact = async () => {
    const response = await api.get(`/contacts/${id}`);
    console.log(response.data);
    // setState(response.data);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    return response.data;
  };

  const handleClose = () => {
    return popover.current.close();
  };

  const updateContactForm = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      popover.current.showModal();
      return;
    }
    updateContact(id, { name, email, phone });
    alert("contact update successfully");
    // clearInterval(interval);
    setName("");
    setEmail("");
    setPhone("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <div className="ui header">Update Contact</div>
      <dialog ref={popover}>
        all fields are mandatory, please enter valid details
        <button onClick={handleClose} className="ui button mini red ">
          close
        </button>
      </dialog>
      <form className="ui form" onSubmit={updateContactForm}>
        <div className="ui fields">
          <div className="six wide field">
            <label>Name</label>
            <input
              type="text"
              placeholder="enter name"
              name={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="six wide field">
            <label>Email</label>
            <input
              type="email"
              placeholder="enter email"
              name={email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="six wide field">
            <label>Mobile</label>
            <input
              type="tel"
              placeholder="enter mobile num"
              name={phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <button className="ui button blue">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
