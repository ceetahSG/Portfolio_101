import { ProductionEvent } from "../config";

interface Props {
  event: ProductionEvent;
  index: number;
}

const ProductionEventCard = ({ event, index }: Props) => {
  return (
    <article className={`production-card production-card-${event.accent}`}>
      <div className="production-card-art">
        {event.image ? (
          <img src={event.image} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="production-card-fallback" aria-hidden="true">
            <span>{event.title.slice(0, 2).toUpperCase()}</span>
            <strong>LIVE PRODUCTION</strong>
          </div>
        )}
        <div className="production-card-number">0{index + 1}</div>
        <div className="production-card-year">{event.year}</div>
      </div>
      <div className="production-card-content">
        <div className="production-card-heading">
          <h3>{event.title}</h3>
          {event.role && <p className="production-card-role">{event.role}</p>}
        </div>
        <p className="production-card-description">{event.description}</p>
        {event.highlights.length > 0 && (
          <ul className="production-card-highlights">
            {event.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        <div className="production-card-tags">
          {event.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {event.links && event.links.length > 0 && (
          <div className="production-card-links">
            {event.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductionEventCard;
