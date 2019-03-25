import React, { Component } from "react";
// import Roommate from "./Roommate";
import axios from "axios";
// import { Card } from "antd";

export default class RoommateDetails extends Component {
  state = {
    roommate: {}
  };

  //   componenentDidMount() {
  //     const roommateID = this.props.match.params.roommateID;
  //     axios.get(`http://127.0.0.1:8000/api/roommates/${roommateID}`).then(res => {
  //       this.setState({
  //         roommate: res.data
  //       });
  //       console.log(res.data);
  //     });
  //   }

  componentDidMount() {
    const userID = this.props.match.params.userID;

    axios.get(`http://127.0.0.1:8000/api/roommates/${userID}`).then(res => {
      this.setState({
        roommate: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <p>{this.state.roommate.favorite_quote}</p>
      </div>
    );
  }
}

// import React from "react";
// import User from "./User";

// const RoommateList = ({ roommatess, removeUserPost }) => {
//   const userList =
//     users.length > 0
//       ? users.map(user => {
//           return (
//             <User key={users.id} user={user} removeUserPost={removeUserPost} />
//           );
//         })
//       : null;
//   return <div>{userList}</div>;
// };

// export default RoommateList;
