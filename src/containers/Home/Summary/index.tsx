import { generateKey } from '@/utils/key';

export function Summary() {
  const paragraphs = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
  ];

  return (
    <section className='my-8'>
      {paragraphs.map((p) => (
        <p key={generateKey(p)} className='my-4 text-2xl lg:text'>
          {p}
        </p>
      ))}
    </section>
  );
}
