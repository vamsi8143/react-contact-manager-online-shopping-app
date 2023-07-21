// import UserContainer from "./Component/UserComponent/UserContainer";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Fragment, Suspense, createContext, lazy, useState } from "react";
import { Provider } from "react-redux";
import store from "./OnlineShopping/redux/store";
import Header from "./OnlineShopping/ProductComponents/Header";

const EditContact = lazy(() => import("./UserContacts/EditContact"));
const AddContactPage = lazy(() => import("./UserContacts/AddContactPage"));
const ContactList = lazy(() => import("./UserContacts/ContactList"));
const HeaderPage = lazy(() => import("./UserContacts/HeaderPage"));
const ContactDetailPage = lazy(() =>
  import("./UserContacts/ContactDetailPage")
);
//online shoping components
const ProductContainer = lazy(() =>
  import("./OnlineShopping/ProductComponents/ProductContainer")
);
const ProductDetail = lazy(() =>
  import("./OnlineShopping/ProductComponents/ProductDetail")
);

export const MyContext = createContext();

function App() {
  const [contactApp, setContactApp] = useState(false);
  const [onlineApp, setOnlineApp] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const ContactManagerApp = () => {
    return (
      <div>
        <Router>
          <HeaderPage />
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContactPage />} />
            <Route path="/contact/:id" element={<ContactDetailPage />} />
            <Route path="edit/:id" element={<EditContact />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      </div>
    );
  };

  const OnlineShoppingApp = () => {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductContainer />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      </Provider>
    );
  };

  const contactAppHandler = () => {
    setContactApp(true);
    setOnlineApp(false);
  };

  const onlineAppHandler = () => {
    setContactApp(false);
    setOnlineApp(true);
  };

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Fragment>
        {/* <UserContainer /> */}
        <div className="ui container">
          {/* <Router> */}
          <div className="ui header aligned center">
            <button className="ui button blue" onClick={contactAppHandler}>
              Contact Manager App
            </button>
            <button className="ui button blue" onClick={onlineAppHandler}>
              Online Shopping App
            </button>
          </div>
          {contactApp ? (
            <ContactManagerApp />
          ) : onlineApp ? (
            <MyContext.Provider value={{ searchResult, setSearchResult }}>
              <OnlineShoppingApp />
            </MyContext.Provider>
          ) : (
            <h1 className="ui header center aligned">
              please select which app u want to go
            </h1>
          )}

          {/* <HeaderPage /> */}
          {/* <Switch> */}
          {/* <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add" element={<AddContactPage />} />
              <Route path="/contact/:id" element={<ContactDetailPage />} />
              <Route path="edit/:id" element={<EditContact />} />
              <Route path="*" element={<Navigate to={"/"} />} /> */}
          {/* <Route
              path="/"
              render={(props) => (
                <AddContactPage
                  {...props}
                  addContactHandler={addContactHandler} //not working for me
                />
              )}
            ></Route>
            <Route
              path="/contacts"
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )} */}
          {/* ></Route> */}
          {/* <Route path="products" element={<ProductContainer />} />
              <Route path="products/:id" element={<ProductDetail />} />
            </Routes> */}
          {/* </Switch> */}
          {/* </Router> */}
          {/* <AddContactPage addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </div>
      </Fragment>
    </Suspense>
  );
}

export default App;
