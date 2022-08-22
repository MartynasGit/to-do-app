import React from "react";
import "./About.css";

const About = () => (
    <div className="About minHeight">
      <p className="p-5">
        Sukurti pirkinių sąrašo aplikaciją: Atvaizduojame itemus (iš
        localstorage)
        <br />
        Galime pridėti itemą (iš localstorage)
        <br /> Ištrinti itemą (iš localstorage)
        <br /> * Item update (localstorage)
        <br /> Turi būti sukurta navigacija, panaudojant react router (bent 2
        puslapiai tarp kurių galima naviguoti)
        <br /> * Hostinti reikia githube su github pages pagalba - aplikacija
        turi būti panaudojama iš mobile device
        <br /> Turi būti pushintas kodas per git cli (ar git GUI įrankius)
        <br /> Turi būti bent 4-turi commitai galite išskirstyti kaip norite,
        pvz: kiekvienai iš operacijų: CREATE, READ, DELETE, UPDATE kiekvienas
        commit be elementarių klaidų / pilnai veikiantis projektas (sunkiai
        pastebimi / logikos bugai yra OK).
        <br /> Commit message’ai, readme.md aprašymas turi būti konkretus,
        išsamus, aiškus.
        <br /> Coding in English!
      </p>
    </div>
);
export default About;
