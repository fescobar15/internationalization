import React from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

export default class JobsList extends React.Component {
  state = {
    offers: [
      {
        id: "0001",
        name: "Manager",
        company: "Schneider Electric",
        salary: 4.5,
        city: "Bogotá, Colombia",
        date: "2019-03-26",
        views: 15780,
      },
      {
        id: "0002",
        name: "Software Engineer",
        company: "Google Inc.",
        salary: 20,
        city: "Palo Alto, CA, USA",
        date: "2019-03-27",
        views: 200,
      },
      {
        id: "0003",
        name: "Nurse",
        company: "Clínica La Aurora",
        salary: 1,
        city: "Cali, Colombia",
        date: "2019-03-28",
        views: 215700,
      },
    ],
  };

  render() {
    function getBrowserLang() {
      return navigator.language || navigator.userLanguage;
    }

    function getTheme() {
      const lang = getBrowserLang();
      if (lang === "en") {
        return "thead-dark";
      } else {
        return "thead-light";
      }
    }

    return (
      <div>
        <table className="table">
          <thead className={getTheme()}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Position"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="Company"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="Salary"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="City"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="PulibicationDate"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="Views"></FormattedMessage>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.offers.map((e, i) => (
              <Job key={i} offer={e} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
