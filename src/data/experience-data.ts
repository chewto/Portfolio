import pkiLogo from '../../public/logo-pki.png'
import iutvLogo from '../../public/download.jpeg'

interface Experience{
  id: number;
  company: string;
  years: string;
  info: string;
  logo: any;
}

export const experienceData: Experience[] = [
  {
    id: 0,
    logo: pkiLogo,
    company: 'Pki services',
    years: '2021 - currently working',
    info: 'The role that i play in PKI services is about Identity verification, we create an identity verification web application using React.js with redux toolkit as the frontend and Python with flask with face-recognition libraries as the backend of the application.'
  },
  {
    id: 0,
    logo: iutvLogo,
    company: 'IUTV - Associate degree in informatics',
    years: '2021 - 2023',
    info: 'Associate degree in informatics, i was the third better academic index in the general promotion, and the better academic index in informatics.'
  }
]