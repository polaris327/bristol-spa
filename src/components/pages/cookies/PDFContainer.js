import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import CookieTable from './CookieTable';
import '../../../styles.css';

class PDFContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cookies, total } = this.props;
    return (
      <div className="pdf-container">
        <div id="cookie-invoice" className="d-print-block">
          <Container>
            <h2 className="text-center">SerpiCookies</h2>
            <p className="text-center">www.serpicookies.com</p>
            <p className="mt-4 pt-4 text-left">{moment(new Date()).format('YYYY-MM-DD')}</p>
            <p className="mb-4 text-left">Client: Serpi</p>
            <CookieTable cookies={cookies} />
            <div className="mt-3 text-left h4">{`TOTAL: ${total}`}</div>
            <div className="mt-4 pt-3 text-left h4">Comments</div>
            <Container className="pt-2 text-left border rounded">
              {cookies.map((cookie, idx) => (
                <p key={`${idx}-${cookie.code}`}>{cookie.comment}</p>
              ))}
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

PDFContainer.propTypes = {
  cookies: PropTypes.array,
  total: PropTypes.any
}

PDFContainer.defaultProps = {
  cookies: [],
  total: ''
}

export default PDFContainer;
