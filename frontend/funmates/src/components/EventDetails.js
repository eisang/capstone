// import React, { Component } from "react";
// import Event from "./Event";
// impurt {Button}
// import { Form, Button } from "reactstrap";
// import axios from "axios";
// import EventForm from "./EventForm";

// export default class EventDetails extends Component {
//   state = {
//     events: {}
//   };

//   componentDidMount() {
//     const userID = this.props.match.params.userID;

//     axios.get(`http://127.0.0.1:8000/api/events/${userID}`).then(res => {
//       this.setState({
//         event: res.data
//       });
//       console.log(res.data);
//     });
//   }

//   handleDelete = event => {
//     const userID = this.props.match.params.userID;

//     axios.delete(`http://127.0.0.1:8000/api/roommates/${userID}`).then(res => {
//       this.setState({
//         roommate: res.data
//       });
//       console.log(res.data);
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>hi</p>
//         <p>{this.state.events.event_theme}</p>
//         {/* <p>{this.state.events.event_date}</p> */}
//         <EventForm
//           requestMethod="put"
//           userId={this.props.match.params.userID}
//           btnText="update"
//         />

//         <form onSubmit={this.handleDelete}>
//           <Button type="danger" htmltype="submit">
//             Delete
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
