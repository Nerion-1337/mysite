import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    front: [
      { id: 1, value: "HTML", xp: 1 },
      { id: 2, value: "CSS", xp: 1 },
      { id: 3, value: "JS", xp: 0.5 },
    ],
    back: [
      { id: 1, value: "PHP", xp: 0.3},
      { id: 2, value: "MySQL", xp: 0.3 },
      { id: 3, value: "NodeJS", xp: 0 },
    ],

    frameworks: [
      { id: 1, value: "React", xp: 0.5 },
      { id: 2, value: "Sass", xp: 1 },
    ],
  };
  render() {
    let { front, back, frameworks } = this.state;

    return (
    <div className="languagesFrameworks">
        <ProgressBar 
        language={front}
        className="languageFront"
        title="Front-End"
        />
        <ProgressBar 
        language={back}
        className="languageBack"
        title="Back-End"
        />
        <ProgressBar 
        language={frameworks}
        className="frameworks"
        title="Framework & Bibliothèque"
        />
           <div className="otherskill">
            <h3>Autres Compétences</h3>
            <ul>
              <li>SEO</li>
              <li>Github</li>
              <li>Montage Video</li>
              <li>Figma</li>
            </ul>
</div>
    </div>);
  }
}

export default Languages;
