import React from 'react';

import styles from './Exp.module.css';

const Exp = () => {
  return (
    <React.Fragment>
      <div className={styles.expWrapper}>
        <section className={styles.expItem}>
          <h3 className={styles.expTitle}>PORTFOLIO</h3>
          <ul className={styles.portfolioList}>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://icarialiving.com/'
                target='_blank'
                rel='noreferrer'
              >
                icarialiving.com &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                The premier at-home senior and family care provider.
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                HTML / SASS / jQuery / GULP / UI Libraries
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://portal.icarialiving.com/#/login'
                target='_blank'
                rel='noreferrer'
              >
                portal.icarialiving.com &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                The premier at-home senior and family buisness portal.
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                React / Redux / Javasript / UI Libraries
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://react-project-manager-app.netlify.app/registration'
                target='_blank'
                rel='noreferrer'
              >
                project-manager &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                App for improving time management on a project.
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                React / Redux / Javasript / UI Libraries
              </p>
              <h4>Test user:</h4>
              <p className={styles.portfolioDescription}>
                email: test11@mail.com <br />
                password: qwerty123
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://slim-mum.netlify.app/login'
                target='_blank'
                rel='noreferrer'
              >
                slim-mum &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                App for Moms who want to lose weightю
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                React / Redux / Javasript / Node.Js / Express / MongoDB / UI
                Libraries
              </p>
              <h4>Test user:</h4>
              <p className={styles.portfolioDescription}>
                email: test111@mail.com <br />
                password: qwerty123
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://jakom333.github.io/parcel-project-template/'
                target='_blank'
                rel='noreferrer'
              >
                Hell english &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                Landing Page for english school
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                HTML / SASS / Javasript / WebPack
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://dmytro888.github.io/js-proj-bootcamp4/'
                target='_blank'
                rel='noreferrer'
              >
                Filmoteka &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>
                App for serching the films
              </p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                HTML / SASS / Javasript / WebPack
              </p>
            </li>
            <li className={styles.portfolioItem}>
              <a
                className={styles.portfolioLInk}
                href='https://dmytro888.github.io/goit-markup-hw-08/'
                target='_blank'
                rel='noreferrer'
              >
                Webstudio &#8594;
              </a>
              <h4>About:</h4>
              <p className={styles.portfolioDescription}>Webstudio info site</p>
              <h4>Technologies used:</h4>
              <p className={styles.portfolioDescription}>
                HTML / SASS / Javasript
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styles.expTitle}>EXPERIENCE</h3>
          <ul className={styles.jobsList}>
            <li className={styles.jobsItem}>
              <span className={styles.date}>
                <span style={{ textDecoration: 'underline' }}>
                  InfinityCore Health
                </span>{' '}
                - React.Js front-end developer
              </span>
              <br />
              (April 2021 - till now)
            </li>
            <li className={styles.jobsItem}>
              <span className={styles.date}>
                <span style={{ textDecoration: 'underline' }}>GOIT.UA</span> -
                Full-stack ReactJS + NodeJS developer (bootcamp)
              </span>
              <br />
              (October 2020 - June 2021)
            </li>
            <li className={styles.jobsItem}>
              <span className={styles.date}>
                Mechanical Engineer in Aviation
              </span>
              <br />
              (December 2010 - September 2020)
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styles.expTitle}>EDUCATION</h3>
          <ul className={styles.jobsList}>
            <li className={styles.jobsItem}>
              <span className={styles.date}>
                <span style={{ textDecoration: 'underline' }}>
                  GOIT.UA - BOOTCAMP IT
                </span>
              </span>
              <br />
              (October 2020 - June 2021)
              <p style={{ marginTop: 10 }}>
                Full-stack Developer Studied HTML5, CSS3, JavaScript,
                React.JS,Node.js
              </p>
            </li>
            <li className={styles.jobsItem}>
              <span className={styles.date}>
                <span style={{ textDecoration: 'underline' }}>
                  National Aviation University (Ukraine)
                </span>
              </span>
              <br />
              (September 2005 - July 2011)
              <p style={{ marginTop: 10 }}>
                Manufacture, Maintenance and Repair ofAircraft and Aircraft
                Engines Diploma ofSpecialist.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Exp;
