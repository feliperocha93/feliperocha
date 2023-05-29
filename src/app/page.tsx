export default function Home() {
  function getFormattedDate(year?: number, month?: number) {
    const date =
      typeof year === 'number' && typeof month === 'number'
        ? new Date(year, month)
        : new Date();

    return date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  }

  const MONTH_MILISECONDS = 1000 * 60 * 60 * 24 * 30;

  function getDifferenceBetweenMonths(olderDate: Date, newerDate: Date) {
    const differenceInMilliseconds = Math.abs(
      newerDate.getTime() - olderDate.getTime()
    );

    return Math.floor(differenceInMilliseconds / MONTH_MILISECONDS);
  }

  return (
    <main className='container p-12'>
      <h1 className='font-bold text-4xl leading-snug'>
        Hello World! 👋🏻
        <br /> My name is Felipe Rocha and I am a Software Engineer.
      </h1>

      <section className='my-8'>
        <p className='my-4'>
          Trabalho como desenvolvedor web desde 2016. Meu primeiro contato com
          código foi quando tentei criar meu primeiro jogo.
        </p>

        <p className='my-4'>
          Atualmente sou Staff Software Engineer na Livus. Amo minha carreira, é
          onde posso me sentir como um super-herói, usando JavaScript e seus
          poderes, para impressionar as pessoas usuárias e ajudar a criar novas
          pessoas super-heroínas.
        </p>

        <p className='my-4'>
          Moro em São Paulo/Brasil com minha esposa e nosso cachorrinha. Quando
          não estou trabalhando, saímos para nos divertir e visitar nossa amada
          família.
        </p>
      </section>

      <section className='my-8'>
        <h2 className='font-bold text-3xl leading-snug'>Career</h2>

        <article className='my-4'>
          <h3 className='my-1 font-bold text-lg'>
            Software Engineer at QuintoAndar
          </h3>
          <p className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            ipsam iure temporibus recusandae quos fugit possimus nesciunt sunt
            asperiores, cumque, necessitatibus error eos soluta id adipisci unde
            placeat harum beatae!
          </p>
          <footer className='my-1 text-xs'>
            <p>
              <b>Stack:</b> React, Vue, Js
            </p>
            <span>
              {getFormattedDate(2022, 1) +
                ' - ' +
                getFormattedDate() +
                ` (${getDifferenceBetweenMonths(
                  new Date(2022, 1),
                  new Date()
                )} months)`}
            </span>
          </footer>
        </article>

        <article className='my-4'>
          <h3 className='my-1 font-bold text-lg'>
            Software Engineer at QuintoAndar
          </h3>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum
            modi, non impedit aliquid, inventore eligendi nam tenetur expedita
            iusto distinctio vitae deleniti animi dolorum, ipsa culpa. Eum, iure
            nemo.
          </p>
          <footer className='my-1 text-xs'>
            <p>
              <b>Stack:</b> React, Vue, Js
            </p>
            <span>
              {getFormattedDate(2022, 1) +
                ' - ' +
                getFormattedDate() +
                ` (${getDifferenceBetweenMonths(
                  new Date(2022, 1),
                  new Date()
                )} months)`}
            </span>
          </footer>
        </article>
      </section>
    </main>
  );
}
