import "./adcard.css";
import types from "prop-types";

export default function AdCard({ ad }) {
  const url = ad.company.url.startsWith("https://")
    ? ad.company.url
    : `https://${ad.company.url}`;

  return (
    <div className="adcard">
      <div className="image">
        <img src={ad.imageUrl} />
      </div>
      <div className="headline">
        <h1>{ad.headline}</h1>
      </div>

      {ad.description && <p>{ad.description}</p>}

      <p>{ad.primaryText}</p>

      <div className="link">
        <a href={url} target="_blank" rel="noreferrer">
          {ad.cta}
        </a>
        <p>Ad By {ad.company.name}</p>
      </div>
    </div>
  );
}

AdCard.propTypes = {
  ad: types.object,
};
