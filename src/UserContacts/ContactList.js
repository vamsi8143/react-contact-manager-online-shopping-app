// import { AccountCircle } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { deleteContact, fetchAllContacts } from "../utils/localStorage.util";
// import { LOCAL_STORAGE_KEY } from "../const";
// import { retriveContacts, storageHandler } from "../utils/localStorage.util";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const elementRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchContacts = async () => {
    const response = await fetchAllContacts();
    setContacts(response.data);
  };
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // const users = retriveContacts();
    // if (users) {
    //   setContacts(users);
    // }
    const response = fetchContacts();
    setContacts(response.data);
  }, []);

  // const storageHandler = (contacts) => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // };
  const removeContactHandler = (id) => {
    deleteContact(id);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    // storageHandler(newContactList);
  };

  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Vamsi",
  //     email: "vamsi@gamil.com", //mock data
  //     phone: 445589965,
  //   },
  //   {
  //     id: 2,
  //     name: "Nani",
  //     email: "nani@gamil.com",
  //     phone: 445589965,
  //   },
  // ];

  const searchHandler = () => {
    setSearchTerm(elementRef.current.value);
    if (elementRef.current.value !== "") {
      const newContactList = contacts.filter((contact) => {
        // console.log(Object.values(contact).join(" ").toLowerCase());
        // console.log(searchTerm);
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(elementRef.current.value.toLowerCase());
      });
      setSearchResult(newContactList);

      // console.log("res", newContactList);
    } else {
      setSearchResult(contacts);
      // console.log("else", contacts);
    }
  };
  // console.log("result", searchResult);
  return (
    <div className="ui main">
      <div>
        <h2>Contact List</h2>

        {/* <div class="ui button">Search</div> */}
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </div>
      <div className="ui icon aligned center input" style={{ width: "500px" }}>
        <input
          type="text"
          placeholder="Search..."
          ref={elementRef}
          name={searchTerm}
          value={searchTerm}
          onChange={searchHandler}
        />
        <i className="search icon"></i>
      </div>
      <div className="ui divided items">
        {searchTerm.length < 1 ? (
          contacts?.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.id}
              deleteHandler={removeContactHandler}
            />
          ))
        ) : searchResult.length > 0 ? (
          searchResult?.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.id}
              deleteHandler={removeContactHandler}
            />
          ))
        ) : (
          <h2 className="ui header center aligned red main">No Data Found</h2>
        )}
      </div>
    </div>
  );
};

export default ContactList;
