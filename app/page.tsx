import { MusicExperience } from "./MusicExperience";

const mapUrl = "https://www.google.com/maps/place/San+Carlos+Garden/@28.2146466,-105.4858718,1078m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86eb15c7ab30ec25:0xd8398acbe2d83d3c!8m2!3d28.2146466!4d-105.4832969!16s%2Fg%2F11srnj8490?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D";

const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mis+XV+de+Natalia+Ivon+Martinez+Jaquez&dates=20260922T200000%2F20260922T235900&ctz=America%2FChihuahua&details=Acompa%C3%B1ame+a+celebrar+mis+quince+a%C3%B1os.&location=San+Carlos+Garden%2C+Delicias%2C+Chihuahua";

const details = [
  { label: "Fecha", value: "22 de septiembre", note: "2026", accent: "22" },
  { label: "Hora", value: "8:00 p. m.", note: "A partir de", accent: "08" },
  { label: "Lugar", value: "San Carlos Garden", note: "Delicias, Chihuahua", accent: "SC", href: mapUrl },
];

const photos = [
  {
    src: "/naty-jardin.jpeg",
    alt: "Natalia sentada entre flores y vegetación",
    className: "gallery-main",
  },
  {
    src: "/naty-flores-vertical.jpeg",
    alt: "Natalia con vestido de flores sosteniendo un diente de león",
    className: "gallery-tall",
  },
  {
    src: "/naty-caballo.jpeg",
    alt: "Natalia montando un caballo negro",
    className: "gallery-wide",
  },
];

export default function Home() {
  return (
    <main>
      <MusicExperience />
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-photo"
          src="/naty-caballo-vertical.jpeg"
          alt="Natalia junto a un caballo negro con un vestido azul floreado"
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
          <h1 id="hero-title">
            <span className="hero-first-name">Natalia Ivon</span>
            <span className="hero-last-name">Martinez Jaquez</span>
          </h1>
          <p className="hero-invite">
            Quiero que seas parte de un día que guardaré para siempre en mi corazón.
          </p>
          <a className="hero-link" href="#invitacion">
            Descubre mi invitación <span aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="hero-side hero-side-left" aria-hidden="true">Quince años</p>
        <p className="hero-side hero-side-right" aria-hidden="true">Natalia · Mis XV · Natalia</p>
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
          <p className="signature">Con cariño, Natalia</p>
        </div>
        <div className="flower-mark" aria-hidden="true">❀</div>
      </section>

      <section className="portrait-story" aria-label="Retrato de Natalia">
        <div className="portrait-frame">
          <img src="/naty-flores-vertical.jpeg" alt="Natalia en el campo con un vestido de flores" />
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
          <p>Te espero para compartir una noche inolvidable.</p>
        </div>

        <div className="details-grid">
          {details.map((detail) => (
            <article className="detail-card" key={detail.label}>
              <span className="detail-number" aria-hidden="true">{detail.accent}</span>
              <p>{detail.label}</p>
              <h3>
                {detail.href ? (
                  <a href={detail.href} target="_blank" rel="noreferrer">{detail.value}</a>
                ) : detail.value}
              </h3>
              <span className="detail-note">{detail.note}</span>
              <span className="detail-flourish" aria-hidden="true">✦</span>
            </article>
          ))}
        </div>

        <div className="event-actions" aria-label="Acciones del evento">
          <a className="event-button event-button-primary" href={googleCalendarUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">＋</span> Agregar a Google Calendar
          </a>
          <a className="event-button" href="/natalia-xv.ics" download>
            <span aria-hidden="true">↓</span> Guardar en otro calendario
          </a>
          <a className="event-button" href={mapUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">⌖</span> Cómo llegar
          </a>
        </div>
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
          <p className="music-intro">Nuestra invitación comienza con esta canción. Puedes pausarla o volver a escucharla con el control de música.</p>
          <a className="music-video-link" href="https://www.youtube.com/watch?v=6k8cpUkKK4c" target="_blank" rel="noreferrer">
            Ver video oficial <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <img src="/naty-caballo.jpeg" alt="Natalia sobre un caballo negro" />
        <div className="closing-overlay" />
        <div className="closing-copy">
          <p className="eyebrow light">Nos vemos muy pronto</p>
          <h2 id="closing-title">Gracias por ser parte<br />de mi <em>historia</em>.</h2>
          <p>Natalia Ivon Martinez Jaquez · Mis XV</p>
        </div>
      </section>

      <footer>
        <span className="footer-monogram" aria-hidden="true">NMJ</span>
        <p>Hecho con ilusión para una noche inolvidable.</p>
        <a href="#" aria-label="Volver al inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
