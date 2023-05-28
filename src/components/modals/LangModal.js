import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import useSound from "use-sound";
import SoundContext from "../SoundContext";
import CloseButton from "../CloseButton";
import Button from "../Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const langs = {
  en: { nativeName: "English" },
  zh: { nativeName: "中文" },
  ko: { nativeName: "한국인" },
  ja: { nativeName: "日本語" },
  es: { nativeName: "Español" },
  ru: { nativeName: "русский" },
  th: { nativeName: "แบบไทย" },
  vi: { nativeName: "Tiếng Việt" },
  id: { nativeName: "Bahasa Indo" },
  fr: { nativeName: "Français" },
  de: { nativeName: "Deutsch" },
  pt: { nativeName: "Português" },
};

export default function LangModal({ show, setShow }) {
  const { sound } = useContext(SoundContext);
  const handleClose = () => setShow(false);

  const { t, i18n } = useTranslation();

  const [playModalOpen] = useSound("../assets/audio/sfx/modal-open.mp3");
  const [playModalClose] = useSound("../assets/audio/sfx/modal-close.mp3");
  const [playButton] = useSound("/assets/audio/sfx/button-select.mp3");
  const [playCancel] = useSound("/assets/audio/sfx/button-cancel.mp3");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      onEntering={() => {
        if (sound) playModalOpen();
      }}
      onExiting={() => {
        if (sound) playModalClose();
      }}
    >
      <Modal.Header style={{ backgroundColor: "#e9e7e2" }}>
        <Modal.Title style={{ fontWeight: "bold" }}>
          {t("modal.lang.title")}
        </Modal.Title>
        <CloseButton
          onClose={handleClose}
          variant="dark"
          style={{ transform: "translate(-10%, -10%)" }}
          resize={false}
        />
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#e9e7e2",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(langs).map((lang) => (
          <Button
            key={lang}
            className="country-button"
            style={{
              fontWeight: i18n.resolvedLanguage === lang ? "bold" : "normal",
            }}
            size="sm"
            content={
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <LazyLoadImage
                  className="country-icon"
                  effect="opacity"
                  alt="Country Icon"
                  src={`assets/lang-icons/${lang}.webp`}
                  draggable="false"
                  width={22}
                />
                <span className="country-name">{langs[lang].nativeName}</span>
              </span>
            }
            onClick={() => {
              i18n.changeLanguage(lang);
              if (sound) playButton();
            }}
          />
        ))}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#e9e7e2" }}>
        <Button
          onClick={() => {
            if (sound) {
              playCancel();
            }
            handleClose();
          }}
          content={t("button.close")}
          size="sm"
          resize={false}
        />
      </Modal.Footer>
    </Modal>
  );
}