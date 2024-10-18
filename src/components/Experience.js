import React, { Component } from 'react';
import { withRouter } from './withRouter';
import './Experience.css';

class Experience extends Component {
  // Define your experience data for Work and Research
  getWorkExperiences = () => {
    return [
      {
        title: 'Senior Software engineer',
        company: 'Digikala',
        link:'https://www.digikala.com/',
        dates: 'Jul 2022 - Present',
        tasks: [
          'Conduct several advanced MySQL courses for about 200 engineers.',
          'Member of the database disaster management team.',
          'Lead of the promotion team for 2 Black Friday campaigns with 800k online users.',
          'Develop features on our native framework to decrease 21% of Redis queue sizes.',
          'Develop a micro-service for stock management with distributed transactions and about 50k requests/second.',
          'Interview, onboarded and mentoring of more than 20 new hires.',
        ]
      },
      {
        title: 'Software engineer',
        company: 'Mohaymen',
        link: '#',
        dates: 'Feb 2021 - Nov 2021',
        tasks: [
          'Develop a fast multi-operational CSV parser in .NET to read a 4G file in 8 seconds.',
          'Develop a logging system to track a request among different services with Decorator Pattern'
        ]
      }
    ];
  };

  getResearchExperiences = () => {
    return [
      {
        title: 'Research Assistant - IoTDB',
        company: 'RADIAN Lab.',
        link: 'https://sharif.edu/~bardiasafaei/RADIAN-Lab.html',
        dates: 'Sep 2023 - Present',
        tasks: [
          'First project on Database management in the whole department.',
          'Exhaustive comparison of different database management like SQL/No-SQL and Time-Series for IoT to understand why we need IoTDB.',
          'Deploy and Profile IoTDB in a cluster and inject data using MQTT protocol.',
          'Design a specific MQTT standard for lightweight communication of IoT devices to IoTDB.',
        ]
      },
      {
        title: 'Research Assistant - Multi-Core Systems',
        company: 'CPS Lab',
        link: 'https://sharif.edu/~ansari/',
        dates: 'Feb 2024 - Present',
        tasks: [
          'Conducted research on multi-core and thermal-aware systems and using machine learning models to predict temperature.',
          'Write several Algorithm of Mibench in C/Java/Python and simulate them in gem5 on several processors such as Arm Cortex-A15 and A7.',
          'Simulate gem5 output on McPAT and HotSpot to get power, area and temperature of the cores.',
        ]
      },
      {
        title: 'Research Assistant - Software',
        company: 'Setareh',
        link: '#',
        dates: 'Jul 2021 - Sep 2021',
        tasks: [
          'Write a reliable Nugget package to run multiple programming language scripts, such as .NET, Python, R, and\n' +
          'Matlab with extensive data in a remote Jupyter Notebook server.',
          'Prototype for several network protocol like HTTP and WebSocket.',
        ]
      }
    ];
  };

  // Helper function to render experiences
  renderExperience = (experience) => {
    return (
      <div className="experience-item" key={experience.title}>
        <h3 className="experience-title">{experience.title}</h3>
        <a className="company-link" href={experience.link} target="_blank" rel="noopener noreferrer">
          {experience.company}
        </a>
        <span className="experience-dates">{experience.dates}</span>
        <ul className="experience-tasks">
          {experience.tasks.map((task, index) => (
            <li key={index} dangerouslySetInnerHTML={{__html: task}}/>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const workExperiences = this.getWorkExperiences();
    const researchExperiences = this.getResearchExperiences();

    return (
      <div className="exp">
        <div className="section">
          <h2>Research Experience</h2>
          {researchExperiences.map(this.renderExperience)}
        </div>

        <div className="section">
          <h2>Work Experience</h2>
          {workExperiences.map(this.renderExperience)}
        </div>
      </div>
    );
  }
}

export default withRouter(Experience);
