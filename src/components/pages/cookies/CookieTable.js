import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

class CookieTable extends Component {
  render() {
    const { cookies } = this.props;
    return (
      <div className="mt-3">
        <Table responsive hover>
          <thead>
            <tr>
              <th>CODE</th>
              <th>TYPE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((cookie, idx) => (
              <tr key={`${cookie.code}-${idx}`}>
                <td>{cookie.code}</td>
                <td>{cookie.type}</td>
                <td>{cookie.quantity}</td>
                <td>{cookie.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

CookieTable.propTypes = {
  cookies: PropTypes.array
};

CookieTable.defaultProps = {
  cookies: []
};

export default CookieTable;
