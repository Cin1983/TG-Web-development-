import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || ''}</p>

                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    `Hyacinthia has her own eclectic style and is very creatively skilled. 
                    She really wants to learn how to create beautiful animated websites and is very eager to learn and evolve herself to get this done. 
`}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    `
                    That's why she started an online course to become a Full Stack Web Developer in 2019 followed by the  remote Web Development coding program from TechGrounds.
                    This coding program is very intense but you will be able to work as a Junior Web Developer afterwards. In this course they will teach you how to work with: 
                    HTML5, CSS, JavaScript, SASS, Bootstrap, REACT and more.
`}
                </p>

                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    `After six months you will be able to develop and improve your coding & soft skills true the community of TechGrounds  & of course an employer who is willing to fine-tune your skills. 
                    Hyacintia has a history of working as a management assistent and administrative helpdesk specialist in all kinds of industries (software development, law, banking, real estate and more).
                    She is strong in operation management and has graduated from Schoevers.`}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://www.linkedin.com/in/hyacinthia-maria-groeizaam-22886722/"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
