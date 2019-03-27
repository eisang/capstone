// import React from "react";
// import Event from "./Event";
// import axios from "axios";
// import EventForm from "./EventForm";
// import {connect}  from "react-redux"
// import PropTypes from 'prop-types'
// import {getEvents} from "../../actions/events"

// export class EventList extends Component {
//   state = {
//     events: []
//   };

//   staticpropTypes ={
//       events:PropTypes.array.isRequired
//   }

//   componentDidMount() {
//       this.props.getEvents
//   }

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:8000/api/events/`).then(res => {
//       this.setState({
//         events: res.data
//       });
//       console.log(res.data);
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.events.map(event => {
//           return <Event key={event.id} event={event} />;
//         })}
//         <br />
//         <h3>create an event</h3>
//         <EventForm requestMethod="post" userId={null} btnText="create" />
//       </div>
//     );
//   }
// }

//  const mapStateToProps = state => ({
//      events:state.events.events
//  })

// export default connect(mapStateToProps,  {getEvents})(EventList)
