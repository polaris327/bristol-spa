import React, { Component } from 'react';
import {
  Container,
  Spinner,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import * as moment from 'moment';
import sumBy from 'lodash/sumBy';
import AddForm from './AddForm';
import CookieTable from './CookieTable';
import PDFContainer from './PDFContainer';
import PrintButton from '../../shared/PrintButton';
import '../../../styles.css';

class CookiesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookies: [],
      showModal: false,
      generating: false
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  handleAddCookies = (cookie) => {
    const { cookies } = this.state;
    cookies.push(cookie);
    this.setState({ cookies, showModal: false });
  }

  totalCookieCost = () => {
    const { cookies } = this.state;
    const total = sumBy(cookies, (cookie) => cookie.total);
    return total;
  }

  handleProgress = (progress) => {
    this.setState({ generating: progress });
  }

  render() {
    const { cookies, showModal, generating } = this.state;
    return (
      <Container className="py-5">
        <div className="d-flex justify-content-between">
          <Button color="primary" onClick={this.toggleModal}>+ New Cookie</Button>
          <PrintButton invoiceId="cookie-invoice" label="Generate PDF" handleProgress={this.handleProgress} />
        </div>
        <CookieTable cookies={cookies} />
        <div className="mt-3 text-left h4">{`TOTAL: ${this.totalCookieCost()}`}</div>
        <PDFContainer cookies={cookies} total={this.totalCookieCost()} />
        {generating && (
          <div className="generating d-flex justify-content-center align-items-center">
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="primary" />
          </div>
        )}
        <Modal isOpen={showModal} toggle={this.toggleModal} size="lg">
          <ModalHeader toggle={this.toggleModal}>Add New Cookie</ModalHeader>
          <ModalBody>
            <AddForm handleAddCookies={this.handleAddCookies} />
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default CookiesPage;
