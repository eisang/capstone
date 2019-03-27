import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEvent } from "../actions/bills";

export class BillsForm extends Component {
  state = {
    bill_category: "",
    bill_amount: ""
  };

  static propTypes = {
    addBill: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //  onChange = e => {
  //   this.setState({
  //     name: e.target.value
  //   });
  // };

  onSubmit = e => {
    e.preventDefault();

    const { bill_category, bill_amount } = this.state;
    const event = { bill_category, bill_amount };
    this.props.addBill(bill);
    this.setState({
      bill_category: "",
      bill_amount: ""
    });
  };

  render() {
    const { bill_category, bill_amount } = this.state;
    return (
      <div>
        <h5>add event form</h5>
        <Form
          onSubmit={this.onSubmit}
          style={{
            marginLeft: "150px",
            marginRight: "340px",
            marginTop: "50px"
          }}
        >
          <FormGroup>
            <Label for="exampleTheme">Theme</Label>
            <Input
              type="text"
              onChange={this.onChange}
              name="bill_category"
              // id="EventTheme"
              value={bill_category}
              placeholder="enter your the theme"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="number"
              name="bill_amount"
              value={bill_amount}
              onChange={this.onChange}
              // id="EventDate"
              placeholder="enter the date"
            />
          </FormGroup>
          <Button type="secondary">submit</Button>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events.events
// });

export default connect(
  null,
  { addEvent }
)(BillsForm);
