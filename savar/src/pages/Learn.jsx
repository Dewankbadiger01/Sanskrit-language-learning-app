import { useState } from "react";
import { Volume2, ArrowRight } from "lucide-react";
import { vowels, consonantGroups } from "../data/sanskritSounds";

const Learn = () => {
  const [selectedSound, setSelectedSound] = useState(vowels[0]);

  const speakSound = (sound) => {
    const utterance = new SpeechSynthesisUtterance(sound.symbol);

    utterance.lang = "hi-IN";
    utterance.rate = 0.65;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="learn-page">

      {/* HEADER */}

      <section className="learn-header">

        <div>
          <p className="section-label">01 · LEARN</p>

          <h1>
            Explore Sanskrit
            <span>Sounds</span>
          </h1>

          <p className="learn-description">
            Discover the structure of Sanskrit sounds through
            स्वर, व्यञ्जन and traditional places of articulation.
          </p>
        </div>

      </section>


      {/* SELECTED SOUND */}

      <section className="selected-sound">

        <div className="selected-symbol">
          {selectedSound.symbol}
        </div>

        <div className="selected-info">

          <p className="selected-category">
            {selectedSound.category}
          </p>

          <h2>{selectedSound.transliteration}</h2>

          <p>
            {selectedSound.description}
          </p>

          <div className="sound-details">

            <div>
              <span>Type</span>
              <strong>{selectedSound.type}</strong>
            </div>

            <div>
              <span>Articulation</span>
              <strong>{selectedSound.articulation}</strong>
            </div>

          </div>

          <button
            className="listen-btn"
            onClick={() => speakSound(selectedSound)}
          >
            <Volume2 size={18} />
            Hear Sound
          </button>

        </div>

      </section>


      {/* VOWELS */}

      <section className="sound-section">

        <div className="section-heading">

          <div>
            <p className="section-label">SVARA</p>
            <h2>स्वर — Vowels</h2>
          </div>

          <span>{vowels.length} sounds</span>

        </div>


        <div className="vowel-grid">

          {vowels.map((sound) => (

            <button
              key={sound.id}
              className={`vowel-card ${
                selectedSound.id === sound.id ? "active" : ""
              }`}
              onClick={() => setSelectedSound(sound)}
            >

              <span className="vowel-symbol">
                {sound.symbol}
              </span>

              <span className="vowel-name">
                {sound.transliteration}
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* CONSONANT GROUPS */}

      <section className="sound-section">

        <div className="section-heading">

          <div>
            <p className="section-label">VYANJANA</p>
            <h2>व्यञ्जन — Consonants</h2>
          </div>

        </div>


        <div className="consonant-groups">

          {consonantGroups.map((group) => (

            <div className="consonant-group" key={group.name}>

              <div className="group-header">

                <div>
                  <h3>{group.name}</h3>
                  <p>{group.english}</p>
                </div>

                <span>{group.articulation}</span>

              </div>


              <div className="consonant-grid">

                {group.sounds.map((sound) => (

                  <button
                    key={sound}
                    className="consonant-card"
                    onClick={() => {
                      const soundData = {
                        id: sound,
                        symbol: sound,
                        transliteration: sound,
                        type: "Consonant",
                        category: group.name,
                        articulation: group.articulation,
                        description: `${group.name} consonant`
                      };

                      setSelectedSound(soundData);
                    }}
                  >

                    {sound}

                  </button>

                ))}

              </div>


              <div className="group-footer">

                <span>
                  Place of articulation
                </span>

                <strong>
                  {group.place}
                </strong>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Learn;