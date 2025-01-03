import React, { Component } from 'react'
import '../styles/Skills.css'

class Skills extends Component {
  render() {
    const frontend_stack = [
      'Javascript',
      'React.js',
      'Typescript',
      'Vue.js',
      'HTML'
    ]

    const design_stack = [
      'CSS',
      'Material UI',
      'Chakra UI'
    ]

    const backend_stack = [
      'Node.js',
      'Express.js',
      'Next.js',
      'Python 3',
      'Flask',
      'Django',
      'Ruby on Rails'
    ]

    const mobile_stack = [
      'React Native'
    ]

    const database_stack = [
      'MongoDB',
      'MySQL 8.0',
      'PostgreSQL',
      'Firebase'
    ]

    const services_stack = [
      'Amazon Web Services',
      'Google Cloud Platform',
      'Microsoft Azure',
      'Cloudinary',
      'Netlify'
    ]

    const workflow_stack = [
      'Snakemake'
    ]

    const others_stack = [
      'Apollo GraphQL',
      'Arduino & Arduino C++',
      'Rapberry Pi 3',
      'Git',
      'Cypress.io'
    ]

    return (
      <div id="skills">
        <div className="skills-intro">
          <div>
            <p className="tech-stack">{'{ TECH-STACK }'}</p>
          </div>
          <div className="skills-description">
            <p>As a self-taught programmer, I am passionate about continuously expanding my skill set, whether by exploring the latest technologies or mastering established ones. I strive to maintain a versatile expertise to effectively contribute to a wide variety of projects.</p>
          </div>
        </div>
        <div className="skills-grid-container">
          <div class="skills-grid-item">
            <p>Frontend</p>
            {frontend_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Design</p>
            {design_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Backend</p>
            {backend_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Mobile</p>
            {mobile_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Databases</p>
            {database_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>  
          <div class="skills-grid-item">
            <p>Services</p>
            {services_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Workflow Management</p>
            {workflow_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Others</p>
            {others_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
