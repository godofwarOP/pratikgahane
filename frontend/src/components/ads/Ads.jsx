import "./ads.css";
import { useEffect, useState } from "react";
import { fetchAds } from "../../http/fetchAds";
import types from "prop-types";
import AdsCard from "../adcard/AdCard";
import Loader from "../loader/Loader";

export default function Ads({ value }) {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!value) {
      setAds([]);
      setLoading(false);
      return;
    }

    fetchAds(value)
      .then((data) => {
        setAds(data.data.ads);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [value]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="ads">
      {ads.length > 0 && (
        <>
          {ads.map((ad) => (
            <AdsCard key={ad._id} ad={ad} />
          ))}
        </>
      )}
    </div>
  );
}

Ads.propTypes = {
  value: types.string,
};
