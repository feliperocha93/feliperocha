export function Summary() {
  const paragraphs = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, corrupti eligendi fugit ex rem officia est corporis reprehenderit iusto omnis labore, dolorem incidunt nostrum magni nesciunt error modi sapiente.',
  ];

  return (
    <section className='my-8'>
      {paragraphs.map((p) => (
        <p key={p.substring(0, 4)} className='my-4'>
          {p}
        </p>
      ))}
    </section>
  );
}
