import React from "react";


export default function Komponent(){
  const cssClass = "logoLandingPage";
  const adresObrazka = "../public/obrazek.png";
  const opisObrazka = {
    alt: "Tekst alterantywny",
    podpis: "Podspis pod obrazkiem"
  };
  return (
    <FIGURE className={cssClass}>
      <IMG src={adresObrazka} alt={opisObrazka.alt} />{opisObrazka.podpis}
    </FIGURE>
  );
}