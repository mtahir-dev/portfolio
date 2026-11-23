import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--lightest-slate);

    .school {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  h4 {
    margin: 0 0 20px;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;

    @media (max-width: 768px) {
      margin-top: 40px;
    }
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  .cert-issuer {
    display: block;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }
`;

const highlights = [
  'CGPA 3.52 / 4.00',
  'Bronze Medal for academic performance',
  'Merit-Based Scholarship',
  'Final-year project: Heart Disease Risk Prediction, a classification model with 96% test accuracy served through a Flask API',
];

const certifications = [
  { name: 'Introduction to MongoDB', issuer: 'MongoDB University · 2023' },
  { name: 'Front-End Web Development with React', issuer: 'Coursera · 2023' },
  { name: 'JavaScript Security Refresher', issuer: 'Coursera · 2023' },
  { name: 'Python & Data Science track (6 courses)', issuer: 'DataCamp · 2019–2022' },
];

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education</h2>

      <div className="inner">
        <div>
          <h3>
            BS Computer Science <span className="school">@ Sukkur IBA University</span>
          </h3>
          <p className="range">Aug 2019 - Jun 2023</p>
          <ul>
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Certifications</h4>
          <ul>
            {certifications.map(({ name, issuer }, i) => (
              <li key={i}>
                {name}
                <span className="cert-issuer">{issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledEducationSection>
  );
};

export default Education;
