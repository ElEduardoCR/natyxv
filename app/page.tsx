const details = [
  { label: "Fecha", value: "Próximamente", accent: "01" },
  { label: "Hora", value: "Por confirmar", accent: "02" },
  { label: "Lugar", value: "Muy pronto", accent: "03" },
];

const photos = [
  {
    src: "/naty-jardin.jpeg",
    alt: "Naty sentada entre flores y vegetación",
    className: "gallery-main",
  },
  {
    src: "/naty-flores-vertical.jpeg",
    alt: "Naty con vestido de flores sosteniendo un diente de león",
    className: "gallery-tall",
  },
  {
    src: "/naty-caballo.jpeg",
    alt: "Naty montando un caballo negro",
    className: "gallery-wide",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-photo"
          src="/naty-caballo-vertical.jpeg"
          alt="Naty junto a un caballo negro con un vestido azul floreado"
        />
        <div className="hero-overlay" />
        <div className="hero-bloom hero-bloom-one" aria-hidden="true" />
        <div className="hero-bloom hero-bloom-two" aria-hidden="true" />

        <div className="hero-topline">
          <span>Una fecha para recordar</span>
          <span className="hero-star" aria-hidden="true">✦</span>
          <span>Una historia para celebrar</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow light">Con mucha alegría</p>
          <p className="mis-xv">Mis XV</p>
          <h1 id="hero-title">Naty <span>Jáquez</span></h1>
          <p className="hero-invite">
            Quiero que seas parte de un día que guardaré para siempre en mi corazón.
          </p>
          <a className="hero-link" href="#invitacion">
            Descubre mi invitación <span aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="hero-side hero-side-left" aria-hidden="true">Quince años</p>
        <p className="hero-side hero-side-right" aria-hidden="true">Naty · Naty · Naty</p>
      </section>

      <section className="welcome" id="invitacion" aria-labelledby="welcome-title">
        <div className="section-number" aria-hidden="true">XV</div>
        <div className="welcome-copy reveal-card">
          <p className="eyebrow">Hoy comienza un nuevo capítulo</p>
          <h2 id="welcome-title">Hay momentos que merecen<br />ser <em>compartidos</em>.</h2>
          <div className="gold-rule" aria-hidden="true"><span>✦</span></div>
          <p className="welcome-message">
            Con el corazón lleno de ilusión, te invito a acompañarme en la celebración de mis
            quince años. Tu presencia hará que esta noche sea todavía más especial.
          </p>
          <p className="signature">Con cariño, Naty</p>
        </div>
        <div className="flower-mark" aria-hidden="true">❀</div>
      </section>

      <section className="portrait-story" aria-label="Retrato de Naty">
        <div className="portrait-frame">
          <img src="/naty-flores-vertical.jpeg" alt="Naty en el campo con un vestido de flores" />
          <span className="portrait-tag">Una tarde soñada</span>
        </div>
        <div className="portrait-copy">
          <p className="eyebrow">15 vueltas al sol</p>
          <p className="portrait-quote">
            “Crecer es descubrir que los mejores recuerdos nacen cuando estamos juntos.”
          </p>
          <div className="portrait-monogram" aria-hidden="true">N</div>
        </div>
      </section>

      <section className="details" aria-labelledby="details-title">
        <div className="details-heading">
          <p className="eyebrow light">Reserva este momento</p>
          <h2 id="details-title">Mi gran día</h2>
          <p>La fecha y el lugar estarán aquí en cuanto queden confirmados.</p>
        </div>

        <div className="details-grid">
          {details.map((detail) => (
            <article className="detail-card" key={detail.label}>
              <span className="detail-number" aria-hidden="true">{detail.accent}</span>
              <p>{detail.label}</p>
              <h3>{detail.value}</h3>
              <span className="detail-flourish" aria-hidden="true">✦</span>
            </article>
          ))}
        </div>

        <p className="details-note">Vuelve pronto para conocer todos los detalles.</p>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <header className="gallery-heading">
          <p className="eyebrow">Un poquito de mí</p>
          <h2 id="gallery-title">Recuerdos antes del gran día</h2>
        </header>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <figure className={photo.className} key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
          <div className="gallery-note">
            <span aria-hidden="true">✦</span>
            <p>Una nueva etapa,<br />la misma esencia.</p>
          </div>
        </div>
      </section>

      <section className="music" aria-labelledby="music-title">
        <div className="music-disc" aria-hidden="true">
          <span>N</span>
        </div>
        <div className="music-copy">
          <p className="eyebrow light">La canción de este momento</p>
          <h2 id="music-title">Count on Me</h2>
          <p className="music-artist">Bruno Mars</p>
          <p className="music-intro">Dale play y acompáñame a celebrar.</p>
          <iframe
            className="spotify-player"
            title="Reproductor de Count on Me de Bruno Mars en Spotify"
            src="https://open.spotify.com/embed/track/7l1qvxWjxcKpB9PCtBuTbU?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <img src="/naty-caballo.jpeg" alt="Naty sobre un caballo negro" />
        <div className="closing-overlay" />
        <div className="closing-copy">
          <p className="eyebrow light">Nos vemos muy pronto</p>
          <h2 id="closing-title">Gracias por ser parte<br />de mi <em>historia</em>.</h2>
          <p>Naty Jáquez · Mis XV</p>
        </div>
      </section>

      <footer>
        <span className="footer-monogram" aria-hidden="true">NJ</span>
        <p>Hecho con ilusión para una noche inolvidable.</p>
        <a href="#" aria-label="Volver al inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
