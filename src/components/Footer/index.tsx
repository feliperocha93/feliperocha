export function Footer() {
  return (
    <footer
      className='container px-12 py-5
      bg-slate-200 dark:bg-gray-700
      text-gray-700 dark:text-white'
    >
      <h2 className='font-bold text-3xl leading-snug text-center'>
        Social Media
      </h2>
      <ul className='container m-4 flex justify-between items-center'>
        <li>Email</li>
        <li>Github</li>
        <li>Instagram</li>
        <li>Linkedin</li>
      </ul>
    </footer>
  );
}
