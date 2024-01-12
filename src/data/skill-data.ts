import TypescriptIcon from '../../public/icons8-typescript-150.png';
import ReactIcon from '../../public/icons8-react-120.png'
import ReduxIcon from '../../public/icons8-redux-150.png'
import JavascriptIcon from '../../public/icons8-javascript-150.png'
import AngularIcon from '../../public/icons8-angular-150.png';
import HTMLIcon from '../../public/icons8-html-96.png'
import CSSIcon from '../../public/icons8-css-96.png'
import SassIcon from '../../public/icons8-sass-150.png'
import PythonIcon from '../../public/icons8-python-150.png'


interface Skill{
  id: number;
  image: any;
  skillTitle: string;
}

export const skillData: Skill[] = [
  {
    id: 0,
    image: ReactIcon,
    skillTitle: 'React.js'
  },
  {
    id: 0,
    image: ReduxIcon,
    skillTitle: 'Redux'
  },
  {
    id: 0,
    image: JavascriptIcon,
    skillTitle: 'Javascript'
  },
  {
    id: 0,
    image: TypescriptIcon,
    skillTitle: 'Typescript'
  },
  {
    id: 0,
    image: AngularIcon,
    skillTitle: 'Angular'
  },
  {
    id: 0,
    image: HTMLIcon,
    skillTitle: 'HTML'
  },
  {
    id: 0,
    image: CSSIcon,
    skillTitle: 'CSS'
  },
  {
    id: 0,
    image: SassIcon,
    skillTitle: 'Sass'
  },
  {
    id: 0,
    image: PythonIcon,
    skillTitle: 'Python'
  }
]

