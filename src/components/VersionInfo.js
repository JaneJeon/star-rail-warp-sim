import { useContext } from "react";
import { json } from "../util/Constants";
import useSound from "use-sound";
import SoundContext from "./SoundContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const trans = require("../assets/data/translations.json");

export default function VersionInfo({ isCurrentSelected, vers, setSelected }) {
  const { sound } = useContext(SoundContext);
  const [playSelect] = useSound("/assets/audio/sfx/version-select.mp3");
  const [playRepeat] = useSound("../assets/audio/sfx/version-repeat.mp3");

  const handleClick = () => {
    if (sound) {
      if (isCurrentSelected) playRepeat();
      else playSelect();
    }
    setSelected(vers);
  };

  const cleanText = (text) => {
    return text
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { t, i18n } = useTranslation();

  return (
    <div
      className={`vers-info ${isCurrentSelected && "highlight"}`}
      onClick={handleClick}
    >
      <LazyLoadImage
        alt={`Version ${vers} Icon`}
        effect="opacity"
        className="vers-icon"
        src={`./assets/banner/mini/${vers}/char-active.webp`}
      />
      <div className="vers-info-text">
        <div style={{ color: isCurrentSelected ? "white" : "black" }}>
          {t("modal.vers.vers")} {vers}
        </div>
        <div style={{ color: isCurrentSelected ? "#7d7d7d" : "#4F4F4F" }}>
          {t("modal.vers.event1")}{" "}
          <span style={{ color: isCurrentSelected ? "#bebebe" : "#868686" }}>
            {cleanText(
              trans[json.getRateUpFive(vers, "char")[0]][i18n.resolvedLanguage]
            )}
          </span>
        </div>
        <div style={{ color: isCurrentSelected ? "#7d7d7d" : "#4F4F4F" }}>
          {t("modal.vers.event2")}{" "}
          <span style={{ color: isCurrentSelected ? "#bebebe" : "#868686" }}>
            {cleanText(
              trans[json.getRateUpFive(vers, "weap")[0]][i18n.resolvedLanguage]
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
