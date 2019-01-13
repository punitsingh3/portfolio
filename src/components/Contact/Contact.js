import fontawesome from '@fortawesome/fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
} from '@fortawesome/fontawesome-free-brands';
import {
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import 'react-typist/dist/Typist.css';
import Map from '../Map/Map';

fontawesome.library.add(
  faFacebook,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
  faGithub,
  faInstagram,
  faMapMarkerAlt,
  faEnvelope
);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contacts-wrapper" id="projects">
        <Paper className="contacts-wrapper-paper" elevation={1}>
          <Typography className="contacts-head" variant="h3" component="div">
            Contact
          </Typography>
          <div className="contacts-grid">
            <Grid
              className="contacts-grid"
              container
              justify="center"
              alignItems="center"
              spacing={24}
            >
              <Grid item xs={6}>
                <div className="contact-row ">
                  <Fab
                    target="_blank"
                    href="https://www.linkedin.com/in/lalitmee/"
                    style={{
                      backgroundColor: '#0077b5'
                    }}
                    aria-label="Add"
                    className="contact-icon"
                  >
                    <FontAwesomeIcon
                      className="contact-icons linkedin"
                      icon={['fab', 'linkedin-in']}
                    />
                  </Fab>
                  <Fab
                    target="_blank"
                    href="https://www.github.com/lalitmee/"
                    style={{
                      backgroundColor: '#24292e'
                    }}
                    aria-label="Add"
                    className="contact-icon"
                  >
                    <FontAwesomeIcon
                      className="contact-icons github"
                      icon={['fab', 'github']}
                    />
                  </Fab>
                  <Fab
                    target="_blank"
                    href="https://www.facebook.com/iamlalitmee"
                    style={{
                      backgroundColor: '#4267b2'
                    }}
                    aria-label="Add"
                    className="contact-icon"
                  >
                    <FontAwesomeIcon
                      className="contact-icons facebook"
                      icon={['fab', 'facebook']}
                    />
                  </Fab>
                  <Fab
                    target="_blank"
                    style={{
                      backgroundColor: '#1da1f2'
                    }}
                    href="https://www.twitter.com/lalitmee/"
                    aria-label="Add"
                    className="contact-icon"
                  >
                    <FontAwesomeIcon
                      className="contact-icons twitter"
                      icon={['fab', 'twitter']}
                    />
                  </Fab>
                </div>

                <div className="contact-row ">
                  <div className="location-head">
                    <FontAwesomeIcon
                      className="location-icon"
                      icon={['fas', 'map-marker-alt']}
                    />
                    <Typography
                      className="location"
                      variant="h3"
                      component="div"
                    >
                      Location
                    </Typography>
                  </div>
                  <div className="location-text">
                    main 1st, 1st Cross Rd, Mico Layout, BTM Layout, Bangalore
                  </div>
                </div>
                <div className="email-row ">
                  <div className="email-head">
                    <FontAwesomeIcon
                      className="email-icon"
                      icon={['fas', 'envelope']}
                    />
                    <Typography className="email" variant="h3" component="div">
                      Email
                    </Typography>
                  </div>
                  <div className="email-text">
                    <a href="mailto:lalitkumar.meena.lk@gmail.com">
                      lalitkumar.meena.lk@gmail.com
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Map
                  isMarkerShown
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Contact;
