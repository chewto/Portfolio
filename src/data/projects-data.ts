import validationWebApp from '../../public/identity validation web app.jpg'
import pokedexAngular from '../../public/pokedex.jpg'
import pokedexReact from '../../public/pokedex-react.jpg'
import postitApp from '../../public/postit.jpeg'

interface Projects{
  id: number;
  url: string;
  repoUrl: string;
  title: string;
  description: string;
  technologies: string;
  image: any;
}

export const projectsData: Projects[] = [
  {
    id: 0,
    url: 'https://github.com/chewto/postIt-app',
    repoUrl: 'https://github.com/chewto/postIt-app',
    title: 'PostIt note app (working progress)',
    description: 'I develop a mini api rest for this project, in theory, this project demostrate my knowledge in HTTP request (CRUD). i was planning to develop a notes app, but i thought in a digital blank with postit for a personal project.',
    technologies: 'React.js, Redux Toolkit, Typescript, HTML, CSS',
    image: postitApp
  },
  {
    id: 1,
    url: 'https://libertador.pkiservices.co/validacion/',
    repoUrl: 'https://github.com/chewto/pki-valiadacion-identidad',
    title: 'Identity validation web app',
    description: 'The identity validation frontend use mediadevices to access the user camera to take a selfie, then it sends a POST request to the api to validate and do ocr over the photos and documents.',
    technologies: 'React.js, Redux Toolkit, Typescript, HTML, CSS',
    image: validationWebApp
  },
  {
    id: 2,
    url: 'https://github.com/chewto/validacion-identidad-api',
    repoUrl: 'https://github.com/chewto/validacion-identidad-api',
    title: 'Identity validation API Rest',
    description: 'The identity validation Api rest receive the request from the frontend and process all the info delivered, once the user send all the data and finish the validation, the data is stored in a mariaDB Database.',
    technologies: 'Python, Flask, Face-recognition',
    image: validationWebApp
  },
  {
    id: 3,
    url: 'https://pokedex-project-jels.netlify.app/',
    repoUrl: 'https://github.com/chewto/pokedex-project',
    title: 'Pokedex',
    description: 'One of my first projects, only use a GET request from the pokeapi',
    technologies: 'React.js, Javascript, HTML, CSS',
    image: pokedexReact
  },
  {
    id: 4,
    url: 'https://pokedex-angular-jels.netlify.app/',
    repoUrl: 'https://github.com/chewto/pokedex-angular',
    title: 'Pokedex',
    description: 'This pokedex was like another approach in a diferent framework, it is more recent than the pokedex before mentioned.',
    technologies: 'Angular +2, Typescript, HTML, CSS',
    image: pokedexAngular
  }
]