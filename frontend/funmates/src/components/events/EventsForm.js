// import React, { Component } from "react";
// import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// // import axios from "axios";
// // import { StaggeredMotion, spring } from "react-motion";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { addEvent } from "../actions/events";

// export class EventsForm extends Component {
//   state = {
//     event_theme: "",
//     event_date: ""
//   };

//   static propTypes = {
//     addEvent: PropTypes.func.isRequired
//   };

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = e => {
//     e.preventDefault();

//     const { event_theme, event_date } = this.state;
//     const event = { event_theme, event_date };
//     this.props.addEvent(event);
//     this.setState({
//       event_theme: "",
//       event_date: ""
//     });
//   };

//   render() {
//     const { event_theme, event_date } = this.state;

//     return (
//       <div>
//         <Form
//           onSubmit={this.onSubmit}
//           style={{
//             marginLeft: "150px",
//             marginRight: "340px",
//             marginTop: "50px"
//             // transform: `translateX(${styles[1].x}px)`
//           }}
//         >

//           <FormGroup>
//             <Label for="exampleTheme">Theme</Label>
//             <Input
//               type="text"
//               onChange={this.onChange}
//               name="event_theme"
//               // id="EventTheme"
//               value={event_theme}
//               placeholder="enter your the theme"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="exampleDate">Date</Label>
//             <Input
//               type="date"
//               name="event_date"
//               value={event_date}
//               onChange={this.onChange}
//               // id="EventDate"
//               placeholder="enter the date"
//             />
//           </FormGroup>
//           <Button type="secondary">submit</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   events: state.events.events
// });
// const mapDispatchToProps = dispatch => ({
//   hideModal: () => dispatch(hideModal()),
//   showModal: (modalProps, modalType) => {
//     dispatch(showModal({ modalProps, modalType }));
//   }
// });

// export default connect(
//   null,
//   { addEvent }
// )(EventsForm);

// import React, { Component } from "react";
// // import { Button } from "reactstrap";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { addEvent } from "../actions/events";
// import { Form, FormGroup, Input, Label, Button } from "reactstrap";

// import { StaggeredMotion, spring } from "react-motion";

// class EventsForm extends Component {
//   state = {
//     event_theme: "",
//     event_date: ""
//   };

//   static propTypes = {
//     addEvent: PropTypes.func.isRequired
//   };

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = e => {
//     e.preventDefault();

//     const { event_theme, event_date } = this.state;
//     const event = { event_theme, event_date };
//     this.props.addEvent(event);
//     this.setState({
//       event_theme: "",
//       event_date: ""
//     });
//   };

//   render() {
//     const { event_theme, event_date } = this.state;

//     let clsName = "nav-container";
//     if (this.props.show) {
//       clsName = "nav-container open";
//     }

//     return (
//       <div className="container">
//         <StaggeredMotion
//           defaultStyles={[{ x: -1250 }, { x: -250 }, { x: -250 }, { x: -200 }]}
//           styles={prevStyles => [
//             { x: spring(0) },
//             { x: spring(prevStyles[0].x) },
//             { x: spring(prevStyles[1].x) },
//             { x: spring(prevStyles[2].x) }
//           ]}
//         >
//           {styles => (
//             <nav className={clsName}>
//               <Form
//                 onSubmit={this.onSubmit}
//                 // body
//                 style={{
//                   transform: `translateX(${styles[0].x}px)`,
//                   width: "300px",
//                   marginTop: "50px",
//                   marginBottom: "60px"
//                   // transform: `translateX(${styles[1].x}px)`
//                 }}
//               >
//                 <FormGroup>
//                   <Label for="exampleTheme">Theme</Label>
//                   <Input
//                     type="text"
//                     onChange={this.onChange}
//                     name="event_theme"
//                     // id="EventTheme"
//                     value={event_theme}
//                     placeholder="enter your the theme"
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="exampleDate">Date</Label>
//                   <Input
//                     type="date"
//                     name="event_date"
//                     value={event_date}
//                     onChange={this.onChange}
//                     // id="EventDate"
//                     placeholder="enter the date"
//                   />
//                 </FormGroup>
//                 <Button type="secondary">submit</Button>
//               </Form>
//             </nav>
//           )}
//         </StaggeredMotion>
//       </div>
//     );
//   }
// }

// export default Project;

// export default connect(
//   null,
//   { addEvent }
// )(EventsForm);

import React, { Component } from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import { Button } from "reactstrap";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import { addEvent } from "../actions/events";
import PropTypes from "prop-types";
// import { FaBars } from "react-icons/fa";
import { StaggeredMotion, spring } from "react-motion";
// import { Card, CardTitle, CardText, Badge, Row, Col } from "reactstrap";

class EventsForm extends Component {
  state = {
    event_theme: "",
    event_date: ""
  };

  static propTypes = {
    addEvent: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { event_theme, event_date } = this.state;
    const event = { event_theme, event_date };
    this.props.addEvent(event);
    this.setState({
      event_theme: "",
      event_date: ""
    });
  };
  render() {
    const { event_theme, event_date } = this.state;

    let clsName = "nav-container";
    if (this.props.show) {
      clsName = "nav-container open";
    }

    return (
      <div className="container">
        {/* <div id="hero-text" className="container">
          <div className="col-md-8">
            <h4>Used hair don't care.</h4>
          </div>
        </div> */}
        {/* <ReactCSSTransitionGroup */}

        <StaggeredMotion
          defaultStyles={[{ x: -1250 }, { x: -250 }, { x: -250 }, { x: -200 }]}
          styles={prevStyles => [
            { x: spring(0) },
            { x: spring(prevStyles[0].x) },
            { x: spring(prevStyles[1].x) },
            { x: spring(prevStyles[2].x) }
          ]}
        >
          {styles => (
            <nav className={clsName}>
              <Form
                onSubmit={this.onSubmit}
                body
                style={{
                  transform: `translateX(${styles[1].x}px)`,
                  width: "200px",
                  marginTop: "60px",
                  marginBottom: "60px"
                }}
              >
                {/* onSubmit={this.onSubmit} */}{" "}
                <FormGroup>
                  <Label for="exampleTheme">Theme</Label>{" "}
                  <Input
                    type="text"
                    onChange={this.onChange}
                    name="event_theme"
                    value={event_theme}
                    placeholder="enter your the theme"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    type="date"
                    name="event_date"
                    value={event_date}
                    onChange={this.onChange}
                    placeholder="enter the date"
                  />
                </FormGroup>
                <Button type="secondary">submit</Button>
              </Form>
            </nav>
          )}
        </StaggeredMotion>
      </div>
    );
  }
}

export default connect(
  null,
  { addEvent }
)(EventsForm);
