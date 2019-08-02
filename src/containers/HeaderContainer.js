import React, { Component } from 'react';
import { Player } from 'video-react';
import {
  Input,
  Label,
  FormGroup,
  Col,
} from 'reactstrap';
import TopHeader from '../components/shared/TopHeader';
import BgImage from '../assets/images/header-bg.png';
import Iphone from '../assets/images/iphone.png';
import FooterLogo from '../assets/images/footer-logo.png';
import BirdLogo from '../assets/images/bird-logo.png';
import '../styles/header.css';
import 'video-react/dist/video-react.css';

class HeaderContainer extends Component {
  render() {
    return (
      <div className='header-container'>
        <img src={BgImage} className='header-overlay' />
        <TopHeader />
        <div className='container-fluid'>
          <div className='flex-row'>
            <div className='left-30'>
              <div className='iphone-image'>
                <img src={Iphone} />
              </div>
              <div className='schedule-demo'>
                <button>Schedule A Demo</button>
              </div>
            </div>
            <div className='content ml-48 mobile-hide'>
              <h1 className='light-pink text-bold'>Meet Louisiana's</h1>
              <h1 className='text-white text-bold'>New Concierge</h1>
              <p className='max-width-500'>
                <small className='text-white'>
                  Introducing TripChat, a pioneering new mobile app that curates
                  a visitor's experiences based on their interests and location.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className='slop-container'>
          <div className='flex-row pt-140 pb-200'>
            <div className='left-30 mobile-hide' />
            <div className='content ml-48'>
              <h1 className='normal-pink text-bold'>Features</h1>
              <div className='d-flex mt-16'>
                <h1 className='dark-blue text-bold'>01</h1>
                <div className='ml-16'>
                  <h5 className='normal-pink text-bold'>Scalable</h5>
                  <h5 className='normal-pink text-bold'>Personalization</h5>
                  <p className='max-width-300'>
                    <small>
                      TripChat offers true one-to-one
                      content, tailoring recommendations to
                      match a user's location and implicit
                      and explicit interests.
                    </small>
                  </p>
                </div>
              </div>
              <div className='d-flex mt-16'>
                <h1 className='dark-blue text-bold'>02</h1>
                <div className='ml-16'>
                  <h5 className='normal-pink text-bold'>Connect Directly</h5>
                  <h5 className='normal-pink text-bold'>with Visitors</h5>
                  <p className='max-width-300'>
                    <small>
                      TripChat destinations can opt to
                      advertise special offers through the
                      app, with push notifications to users
                      interested in what you offer.
                    </small>
                  </p>
                </div>
              </div>
              <div className='d-flex mt-16'>
                <h1 className='dark-blue text-bold'>03</h1>
                <div className='ml-16'>
                  <h5 className='normal-pink text-bold'>See & Say</h5>
                  <h5 className='normal-pink text-bold'>Storytelling</h5>
                  <p className='max-width-300'>
                    <small>
                      Tell the story of your destination with
                      audio narration that prompts users to
                      listen when they are in proximity of
                      your location.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='blue-background'>
          <h1 className='text-bold'>
            <span className='text-white'>TripChat </span>
            <span className='normal-pink'> in Action</span>
          </h1>
          <div className='mt-16 video-container'>
            <Player
              playsInline
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
        </div>

        <div className='pink-background'>
          <div className='flex-row pb-10'>
            <div className='left-30 mobile-hide' />
            <div className='content ml-48'>
              <h1 className='text-bold'>
                <span className='text-white'>See a Free </span>
                <span className='dark-blue'> TripChat Demo</span>
              </h1>
              <p className='max-width-500'>
                <small className='text-white'>
                  Get in on the ground floor of this travel innovation.
                  Learn more about TripChat with a free demo, and ask
                  about unique advertising opportunities within the app.
                </small>
              </p>
              <div className='demo-form'>
                <Input type='text' name='firstname' placeholder='First Name' />
                <Input type='text' name='lastname' placeholder='Last Name' />
                <Input type='phone' name='phone' placeholder='Phone' />
                <Input type='email' name='email' placeholder='Email' />
                <Input type='select' name='industry' placeholder='Select Your Industry*'>
                  <option>Digital</option>
                  <option>Software</option>
                  <option>Marketing</option>
                  <option>Consulting</option>
                </Input>
                <p className='max-width-300'>
                  <small className='text-white'>
                    Are you interested in advertising through the app?
                  </small>
                </p>
                <div className='radio-groups'>
                  <FormGroup>
                    <Label check>
                      <Input type='radio' name='confirm' />{' '}
                      YES
                    </Label>  
                  </FormGroup>
                  <FormGroup>
                    <Label check>
                      <Input type='radio' name='confirm' />{' '}
                      NO
                    </Label>  
                  </FormGroup>
                </div>
                <div className='schedule-demo pl-0'>
                  <button>Schedule A Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className='black-footer'>
          <div className='footer-logo'>
            <img src={FooterLogo} />
          </div>
          <p className='mt-16'>
            <small className='text-white'>
              Disclaimer info here
            </small>
          </p>
          <img className='bird-logo' src={BirdLogo} />
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
