import React, {Component} from 'react';
import {withRouter} from './withRouter';
import './Project.css';

class Project extends Component {
  // Define your project data
  getProjects = () => {
    return [
      {
        title: 'Search Engine',
        link: 'https://github.com/hoseinaghaei/nlp-search-engine',
        tech: 'Python, JS',
        tasks: [
          'ML models like Transformer (BERT) and fastText.',
          'Collect several papers and train models with their title and abstract.',
          'Classification and Clustering of the papers using Techniques such as K-Means.',
        ],
      },
      {
        title: 'PintOS',
        tech: 'C',
        link: 'https://github.com/hoseinaghaei/OS_pintos',
        tasks: [
          'A Tiny OS empowered with features such as an inode file system, buffer cache, directories, several syscall, locking mechanism, priority based scheduling.',
        ],
      },
      {
        title: 'Online Ticket',
        tech: 'nodeJs, React, MongoDB',
        link: 'https://github.com/hoseinaghaei/onlineTicket',
        tasks: [
          'Full cycle of the software with Agile methodologies (Kanban) and practices',
          'Defence again security issues like XSS and SQL Injection',
        ],
      },
      {
        title: 'Kafka',
        link: 'https://github.com/hoseinaghaei/kafka',
        tech: 'Python, Java',
        tasks: [
          'An MVP of Kafka streaming platform with multiple subscriber and publisher.',
          'Fault tolerance and partitioning of data.',
          'Guarantee the exact one recipient.',
        ],
      },
      {
        title: 'MIPS',
        link: 'https://github.com/hoseinaghaei/MIPS-Verilog',
        tech: 'Verilog',
        tasks: [
          'A complete implementation of MIPS processor in Verilog',
          'Full implementation of LRU cache and the pipeline',
        ],
      },
      {
        title: 'Mibench',
        link: 'https://github.com/hoseinaghaei/mibench',
        tech: 'Python, Java, C',
        tasks: [
          'Several algorithm of mibench in C,Java and Python.',
          'Script of gem5 for Arm Cortex-A15 and A7, script to convert them into McPAT xml file.',
          'Output of Power, area for each algorithm.',
        ],
      },

      {
        title: 'Torrent',
        link: 'https://github.com/hoseinaghaei/socket-programming',
        tech: 'Python',
        tasks: [
          'An MVP of the Torrent protocol for distributed file sharing using Python sockets.',
        ],
      },
      {
        title: 'C-Minus',
        link: 'https://github.com/hoseinaghaei/c-minus-compiler',
        tech: 'Python',
        tasks: [
          'A full-compiler for a simplified version of C called C-minus.',
          'Handle Recursive Calls and detect several semantic errors.',
        ],
      },
      {
        title: 'Router',
        link: 'https://github.com/hoseinaghaei/router_simulation',
        tech: 'Python',
        tasks: [
          'Simulation of a router with multi processors and 3 queue mechanisms',
          'A real-word example of data with poison rate of incoming packets and exponential mean time for processing.',
        ],
      },
      {
        title: 'DayPay',
        link: 'https://github.com/hoseinaghaei/DayPay',
        tech: 'Python, JS',
        tasks: [
          'My startup MVP in Jango about a platform to facilitate employee advance payments. .',
        ],
      },
      {
        title: 'Unlock-Car',
        link: 'https://github.com/hoseinaghaei/unblock_car',
        tech: 'Python',
        tasks: [
          'The minimum movement for the Unlock Car game with A* search algorithm',
        ],
      },
      {
        title: 'SDN',
        link: 'https://github.com/hoseinaghaei/SDN',
        tech: 'Python',
        tasks: [
          'A simple SDN topology to push minimum path provided from the dijkstra algorithm to the controllers.',
        ],
      },

    ];
  };

  // Helper function to render projects
  renderProject = (project) => {
    return (
      <div className="project-item" key={project.title}>
        <a className="project-title-link" href={project.link} target="_blank" rel="noopener noreferrer">
          <h3 className="project-title">{project.title}</h3>
        </a>
        <span className="experience-dates">{project.tech}</span>
        <ul className="experience-tasks">
          {project.tasks.map((task, index) => (
            <li key={index} dangerouslySetInnerHTML={{__html: task}}/>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const projects = this.getProjects();

    return (
      <div className="exp">
        <div className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map(this.renderProject)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Project);
