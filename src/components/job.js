import React from "react";
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
} from "react-intl";

export default class Job extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.offer.id}</th>
        <td>{this.props.offer.name}</td>
        <td>{this.props.offer.company}</td>
        <td>
          <FormattedNumber value={this.props.offer.salary}></FormattedNumber>{" "}
          <FormattedPlural
            value={this.props.offer.salary}
            one={<FormattedMessage id="Million"></FormattedMessage>}
            other={<FormattedMessage id="Millions"></FormattedMessage>}
          ></FormattedPlural>
        </td>
        <td>{this.props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(this.props.offer.date)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </td>
        <td>
          <FormattedNumber value={this.props.offer.views}></FormattedNumber>
        </td>
      </tr>
    );
  }
}
