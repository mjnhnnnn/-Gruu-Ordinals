import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./launchpad.css";
export default function Launchpad() {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = <div></div>;
  return (
    <>
      <section className="launchpad py-5">
        <div className="container">
          <h2 className="text-white launchpad-title mb-4">
            upcoming and in progress
          </h2>
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="card flex justify-content-center">
                <Card
                  title="Comingsoon"
                  subTitle="..."
                  footer={footer}
                  header={header}
                  className="md:w-25rem"
                >
                  <p className="m-0">New Launchpad will list at here</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="text-white mb-4">CLOSED LAUNCHPAD</h2>
          <div className="table-responsive">
            <table className="table table-dark rounded l-table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Project Name </th>
                  <th scope="col">Type</th>
                  <th scope="col">Total Raise</th>
                  <th scope="col">Sale Price</th>
                  <th scope="col">Access Type</th>
                  <th scope="col">Closed In(UTC)</th>
                  <th scope="col">Status</th>
                  <th scope="col">Chain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
