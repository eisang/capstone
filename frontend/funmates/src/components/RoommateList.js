import React, { Component } from "react";
import Roommate from "./Roommate";
import axios from "axios";

// const listData = [];
// for (let i = 0; i < 5; i++) {
//   listData.push({
//     href: "http://ant.design",
//     title: `ant design part ${i}`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description:
//       "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
//   });
// }

export default class RoommateList extends Component {
  state = {
    roommates: []
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/roommates/`).then(res => {
      this.setState({
        roommates: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        {this.state.roommates.map(roommate => {
          return <Roommate key={roommate.id} roommate={roommate} />;
        })}
      </div>
    );
  }
}
