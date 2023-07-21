import { useEffect } from "react";
import { fecthUserAction } from "./UserAction";
import { connect } from "react-redux";

const UserContainer = ({ fetchUserData, user }) => {
  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (user.loading) {
    return <p>loading...</p>;
  }
  if (user?.error) {
    return <p>error occured {user.error}</p>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>PHONE</td>
          </tr>
        </thead>
        <tbody>
          {user?.userData?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fecthUserAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
