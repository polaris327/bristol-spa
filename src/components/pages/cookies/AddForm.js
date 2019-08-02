import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import PropTypes from 'prop-types';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      type: '',
      client: '',
      quantity: 0,
      cost: 0,
      totalCost: 0,
      comment: ''
    };
  }

  updateFieldValues = (e) => {
    const isValid = this.validateFieldValues(e.target.name, e.target.value);
    if (isValid) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  validateFieldValues = (name, value) => {
    switch(name) {
      case 'code':
        const regexForCode = /^[a-zA-Z0-9]+$/;
        return regexForCode.test(value) && value.length <= 10;
      case 'type':
        return true;
      case 'client':
        const regexForClient = /^[a-zA-Z]+$/;
        return regexForClient.test(value) && value.length <= 50;
      default:
        return true;
    }
  }

  disableButton = () => {
    const {
      code,
      type,
      client,
      quantity,
      cost
    } = this.state;

    return !code || !type || !client || !quantity || !cost;
  }

  addNewCookie = () => {
    const { handleAddCookies } = this.props;
    const {
      code,
      type,
      client,
      quantity,
      cost,
      comment
    } = this.state;
    const newCookie = {
      code,
      type,
      client,
      cost,
      quantity,
      total: Math.round(cost * quantity * 100) / 100,
      comment
    }
    handleAddCookies(newCookie);
  }

  render() {
    const {
      code,
      client,
      quantity,
      cost,
      type,
      comment
    } = this.state;
    return (
      <Form>
        <Container>
          <Row>
            <Col sm="12">
              <Label for="cookieCode">Cookie Code</Label>
              <Input
                type="text"
                name="code"
                id="cookieCode"
                placeholder="Cookie Code"
                value={code}
                valid={this.validateFieldValues('code', code)}
                invalid={!code}
                onChange={this.updateFieldValues}
                required
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="12">
              <Label for="cookieType">Cookie Type</Label>
              <Input
                type="select"
                name="type"
                id="cookieType"
                valid={type !== ''}
                invalid={!type}
                placeholder="Select"
                onChange={this.updateFieldValues}
                required
              >
                <option value="">Select</option>
                <option value="chocolate">Chocolate</option>
                <option value="vainilla">Vainilla</option>
                <option value="strawberry">Strawberry</option>
              </Input>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="12">
              <Label for="client">Client Name</Label>
              <Input
                type="text"
                name="client"
                id="client"
                value={client}
                valid={this.validateFieldValues('client', client)}
                invalid={!client}
                onChange={this.updateFieldValues}
                placeholder="Client's Name"
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="4">
              <Label for="quantity">Quantity</Label>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                valid={quantity > 0}
                invalid={!quantity}
                onChange={this.updateFieldValues}
              />
            </Col>
            <Col sm="4">
              <Label for="cost">Individual Cost</Label>
              <Input
                type="number"
                name="cost"
                id="cost"
                value={cost}
                valid={cost > 0}
                invalid={!cost}
                onChange={this.updateFieldValues}
              />
            </Col>
            <Col sm="4">
              <Label for="totalCost">Total Cost</Label>
              <FormText id="totalCost" className="h5 mt-2" color={'#000000'}>{`${cost * quantity}`}</FormText>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="12">
              <Label for="comment">Comments</Label>
              <Input
                type="textarea"
                name="comment"
                id="comment"
                value={comment}
                onChange={this.updateFieldValues}
              />
            </Col>
          </Row>

          <div className="mt-4 d-flex justify-content-end">
            <Button
              disabled={this.disableButton()}
              onClick={this.addNewCookie}
              color="primary"
            >Add to List</Button>
          </div>
        </Container>
      </Form>
    );
  }
}

AddForm.propTypes = {
  handleAddCookies: PropTypes.func
};

AddForm.defaultProps = {
  handleAddCookies: (newCookie) => {}
}

export default AddForm;
