import React, { useContext } from "react";
import "../../css/Banners.css";
import "../../css/vers/1.1.0.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ResizeContext from "../../components/ResizeContext";
import { useTranslation } from "react-i18next";
import NameTag from "../../components/NameTag";

export default function GamerMoment() {
  const { getWidth, getHeight } = useContext(ResizeContext);
  const { i18n } = useTranslation();
  return (
    <React.Fragment>
      <div
        style={{
          width: getWidth(8),
          height: getHeight(677.33, 1100),
          background:
            "linear-gradient(180deg, black 75%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-2720%, -50%)",
        }}
      />
      <div
        style={{
          width: getWidth(100),
          height: getHeight(50, 1100),
          background:
            "linear-gradient(180deg, black 75%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-310%, -678%)",
        }}
      />
      <div
        style={{
          width: getWidth(764),
          height: getHeight(677.33, 1100),
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, rgba(40, 33, 36, 1) 70%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          boxShadow: "0 0 10px rgba(8, 8, 8, 0.521)",
          top: "50%",
          left: "50%",
          transform: "translate(-27.5%, -50%)",
        }}
      >
        <div
          style={{
            backgroundImage: "url(../assets/banner/right-corner.webp)",
            height: getHeight(200, 148),
            width: getWidth(148),
            backgroundSize: `${getWidth(148)}px ${getHeight(200, 148)}px`,
            position: "absolute",
            zIndex: "1",
            right: "0",
          }}
        />
        <LazyLoadImage
          //   src="../assets/banner/1.0.1/char-banner-back.webp"
          width={getWidth(1500)}
          alt="right"
          draggable="false"
          style={{
            position: "relative",
            animation: "silver-wolf-back-animation 3s 200ms 1",
            animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
            animationFillMode: "both",
          }}
        />
      </div>
      <div
        className="rate-up-char-icons"
        style={{
          width: getWidth(72.3),
          height: getHeight(206.1, 72.3),
          transform: "translate(-680%, 90%)",
          animation: "appear 50ms 200ms 1",
          opacity: "0",
          animationFillMode: "both",
        }}
      >
        <div
          style={{
            backgroundImage: "url(../assets/banner/1.1.0/char-rate-1.webp)",
            width: getWidth(1100),
            height: getWidth(1100),
            backgroundSize: getWidth(1100),
            position: "absolute",
            animation: "dan-heng-animation 1s 1",
            animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
            animationDelay: "250ms",
            opacity: "0",
            animationFillMode: "both",
          }}
        />
      </div>
      <div
        className="rate-up-char-icons"
        style={{
          width: getWidth(72.3),
          height: getHeight(206.1, 72.3),
          transform: "translate(-560%, 90%)",
          animation: "appear 50ms 1",
          animationDelay: "275ms",
          opacity: "0",
          animationFillMode: "both",
        }}
      >
        <div
          style={{
            backgroundImage: "url(../assets/banner/1.1.0/char-rate-2.webp)",
            width: getWidth(1100),
            height: getWidth(1100),
            backgroundSize: getWidth(1100),
            position: "absolute",
            animation: "asta-animation 1s 1",
            animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
            animationDelay: "300ms",
            animationFillMode: "both",
            opacity: "0",
          }}
        />
      </div>
      <div
        className="rate-up-char-icons"
        style={{
          width: getWidth(72.3),
          height: getHeight(206.1, 72.3),
          transform: "translate(-440%, 90%)",
          animation: "appear 50ms 1",
          animationDelay: "350ms",
          opacity: "0",
          animationFillMode: "both",
        }}
      >
        <div
          style={{
            backgroundImage: "url(../assets/banner/1.1.0/char-rate-3.webp)",
            width: getWidth(1100),
            height: getWidth(1100),
            backgroundSize: getWidth(1100),
            position: "absolute",
            animation: "serval-animation 1s 1",
            animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
            animationDelay: "350ms",
            animationFillMode: "both",
            opacity: "0",
          }}
        />
      </div>
      <LazyLoadImage
        effect="opacity-100"
        src={`../assets/banner/1.0.1/${i18n.resolvedLanguage}/char-left.webp`}
        width={getWidth(331)}
        alt="left"
        draggable="false"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-166%, -50%)",
          zIndex: "100",
        }}
      />
      <LazyLoadImage
        src="../assets/banner/1.1.0/main-char.webp"
        width={getWidth(800)}
        alt="char"
        draggable="false"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          animation: "silver-wolf-animation 3s 200ms 1",
          animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
          animationFillMode: "both",
        }}
      />
      {/* <LazyLoadImage
        effect="opacity"
        src="../assets/magnify.webp"
        width={getWidth(40)}
        alt="magnify"
        draggable="false"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-430%, 120%)",
          filter: "brightness(0.4)",
        }}
      /> */}
      <NameTag
        name="Silver Wolf"
        bottom={true}
        style={{ transform: "translate(-75%, 50%)" }}
        anim={false}
      />
    </React.Fragment>
  );
}
