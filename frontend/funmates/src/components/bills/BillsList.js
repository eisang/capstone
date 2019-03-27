import React, { Component, Fragment } from "react";
// import Event from "./Event";
// import axios from "axios";
// import EventForm from "./EventForm";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { getBills, deleteBill } from "../actions/bills";
import { Table, Button } from "reactstrap";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import EventsStyle from "./EventsStyle";
// import { CSSTransition } from "react-transition-group";

export class BillsList extends Component {
  state = {
    bills: []
  };

  // static propTypes = {
  //   events: PropTypes.array.isRequired,
  //   getEvents: PropTypes.func.isRequired,
  //   deleteEvent: PropTypes.func.isRequired
  // };

  componentDidMount() {
    this.props.getBills();
  }

  render() {
    // const transitionOptions = {
    //   trasnstionName: "fade",
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 500
    // };
    return (
      <Fragment>
        {/* <h5>events</h5> */}
        <Table hover>
          <thead>
            <tr>
              <th>bill_category</th>
              <th>bill_amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* <CSSTransition {...transitionOptions}> */}
            {this.props.bills.map(bill => (
              <tr key={bill.id}>
                <td>{bill.bill_category}</td>
                <td>{bill.bill_amount}</td>
                <td>
                  <Button
                    onClick={this.props.deleteBill.bind(this, bill.id)}
                    className="btn btn danger btn-sm"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
            {/* </CSSTransition> */}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills.bills
});

export default connect(
  mapStateToProps,
  { getBills, deleteBill }
)(BillsList);
