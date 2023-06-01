import { Link } from '@/components/Link';
import { LinkProps } from '@/types/Footer';

interface FooterLinksProps {
  links: LinkProps[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul
      className='my-8 mx-auto max-w-xl
      flex justify-between items-center lg:text-lg'
    >
      {links.map(({ src, icon, text }) => (
        <Link key={text} src={src} icon={icon} text={text} />
      ))}
    </ul>
  );
}
