import { LinkProps } from '@/types/Footer';
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';

export const footerLinks: LinkProps[] = [
  {
    src: 'https://github.com/feliperocha93',
    icon: <Github />,
    text: 'Github',
  },
  {
    src: 'https://www.instagram.com/feliperochaxx/',
    icon: <Instagram />,
    text: 'Instagram',
  },
  {
    src: 'https://www.linkedin.com/in/felipe-rocha-dev-js/',
    icon: <Linkedin />,
    text: 'Linkedin',
  },
];
