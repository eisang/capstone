import React, { Fragment } from "react";
import BillsForm from "./BillsForm";
import BillsList from "./BillsList";

export default function EventView() {
  return (
    <Fragment>
      <BillsForm />
      <BillsList />
    </Fragment>
  );
}
