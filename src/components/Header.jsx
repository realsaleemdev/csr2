export default function Header(){
    return(
        <>
         <main class="wrap">
    <section class="card" aria-label="Contact form">
      <div class="card__grid">
        <div class="hero" aria-hidden="true">
          <img class="hero__img" src="illustration.jpg" alt="" />
        </div>

        <div class="formSide">
          <h1 class="heading">Send us a Message</h1>

          <form class="form" action="#" method="post">
            <input class="input" type="text" name="name" placeholder="Enter your name" required></input>
            <input class="input" type="email" name="email" placeholder="Enter your email" required></input>
            <textarea class="input input--area" name="message" rows="5" placeholder="Enter your message" required></textarea>

            <button class="btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>
        </>
    );
}