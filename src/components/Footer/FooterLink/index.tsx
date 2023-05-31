import { Link } from '@/components/Link';
import { LinkProps } from '@/types/Footer';

interface FooterLinksProps {
  links: LinkProps[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className='container my-8 flex justify-between items-center'>
      {links.map(({ src, icon, text }) => (
        <Link key={text} src={src} icon={icon} text={text} />
      ))}
    </ul>
  );
}
