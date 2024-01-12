import pkiLogo from '../../public/logo-pki.png'

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
    info: 'asdasdasdasdasda'
  }
]