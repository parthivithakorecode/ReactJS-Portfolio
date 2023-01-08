import React from 'react';
import IMG1 from '../../assets/bookstore.jpg';
import IMG2 from '../../assets/todo.jpg';
import IMG3 from '../../assets/bulk.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/shelter1.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Soccer Robot',
      img: IMG1,
      description:
        'Team Leader of the Hardware Project dealing with creation of a Soccer Robot. We cleared 2 rounds of Roborace contest held at IIIT Nagpur',
      technologies: 'Arduino | Mechanics',
      
    },
    {
      id: 2,
      title: 'Universal Blocker',
      img: IMG4,
      description:
        'A Universal Blocker Program which blocks ads and Spoilers from the web using Web Request Blocking Technique and Key-word Mapping',
      technologies: 'HTML | CSS | JavaScript',
      
    },
    {
      id: 3,
      title: 'Heart Disease Detection',
      img: IMG2,
      description: 'A Machine Learning Model to accurately detect and predict if a person is suffering from a heart disease using the given dataset',
      technologies: 'ML | DL | Python',
      
    },
    {
      id: 4,
      title: 'Bulk Email Sender',
      img: IMG3,
      description: 'A program which can send bulk E-mails to to all the requested clients at once if a list of email addresses is provided in any format ',
      technologies: 'Python | Python Script',
      
    },
    {
      id: 5,
      title: 'Paper on Hand Gesture Recognition',
      img: IMG5,
      description:
        'A detailed review on various Hand Gesture Recognition techniques and clasification of the best technique with highest accuracy',
      technologies: 'Computer Vision | Deep Learning ',
      
    },
    {
      id: 6,
      title: 'Paper on Communication for Deaf using NLP and Computer Vision',
      img: IMG6,
      description:
        'Solving Problem of deaf communication using computer vision and NLP ',
      technologies: 'NLP | Computer Vision | Python',
      
    },
  ];

  return (
    <section id="portfolio">
      
      <h2>My Projects and Publications</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>

              <p>{pro.description}</p>
              <br></br>
              
              <p>{pro.technologies}</p>
            </div>
            
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
