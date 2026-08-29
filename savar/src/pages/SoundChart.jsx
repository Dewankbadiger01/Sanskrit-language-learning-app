import { useState } from "react";
import { Volume2, MapPin } from "lucide-react";
import { consonantGroups } from "../data/sanskritSounds";

const SoundChart = () => {
  const [selectedGroup, setSelectedGroup] = useState(consonantGroups[0]);

  const speakSound = (sound) => {
    const utterance = new SpeechSynthesisUtterance(sound);

    utterance.lang = "hi-IN";
    utterance.rate = 0.65;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="chart-page">

      {/* HEADER */}

      <section className="chart-header">

        <p className="section-label">
          02 · SOUND CLASSIFICATION
        </p>

        <h1>
          The Sanskrit
          <span>Sound Map</span>
        </h1>

        <p>
          Sanskrit consonants are systematically organized according
          to their place of articulation. Explore each वर्ग and
          understand how the sounds are produced.
        </p>

      </section>


      {/* ARTICULATION MAP */}

      <section className="articulation-section">

        <div className="articulation-intro">

          <div>
            <p className="section-label">
              PLACE OF ARTICULATION
            </p>

            <h2>
              पंच स्थान
            </h2>

            <p>
              The five primary articulation regions used in the
              traditional Sanskrit phonetic system.
            </p>
          </div>

        </div>


        <div className="articulation-grid">

          {consonantGroups.map((group, index) => (

            <button
              key={group.name}
              className={`articulation-card ${
                selectedGroup.name === group.name ? "selected" : ""
              }`}
              onClick={() => setSelectedGroup(group)}
            >

              <span className="articulation-number">
                0{index + 1}
              </span>

              <div className="articulation-icon">
                <MapPin size={22} />
              </div>

              <h3>
                {group.articulation}
              </h3>

              <p>
                {group.place}
              </p>

              <strong>
                {group.name}
              </strong>

            </button>

          ))}

        </div>

      </section>


      {/* SELECTED GROUP */}

      <section className="selected-group">

        <div className="selected-group-header">

          <div>

            <p className="section-label">
              SELECTED VARGA
            </p>

            <h2>
              {selectedGroup.name}
            </h2>

            <p>
              {selectedGroup.articulation} ·{" "}
              {selectedGroup.place}
            </p>

          </div>

          <div className="selected-place">
            <MapPin size={18} />
            {selectedGroup.place}
          </div>

        </div>


        {/* SOUNDS */}

        <div className="chart-sounds">

          {selectedGroup.sounds.map((sound, index) => (

            <div
              className="chart-sound-card"
              key={sound}
            >

              <div className="chart-sound-number">
                0{index + 1}
              </div>

              <div className="chart-sound-symbol">
                {sound}
              </div>

              <button
                onClick={() => speakSound(sound)}
                title={`Hear ${sound}`}
              >
                <Volume2 size={18} />
              </button>

            </div>

          ))}

        </div>


        {/* EXPLANATION */}

        <div className="group-explanation">

          <div>
            <span>Varga</span>
            <strong>{selectedGroup.name}</strong>
          </div>

          <div>
            <span>Articulation</span>
            <strong>{selectedGroup.articulation}</strong>
          </div>

          <div>
            <span>Place</span>
            <strong>{selectedGroup.place}</strong>
          </div>

        </div>

      </section>


      {/* PHONETIC ORDER */}

      <section className="phonetic-order">

        <p className="section-label">
          THE LOGIC
        </p>

        <h2>
          Why are the sounds arranged this way?
        </h2>

        <p>
          Sanskrit phonetics follows a systematic arrangement.
          Within each वर्ग, sounds progress through differences
          such as voicing and aspiration.
        </p>


        <div className="order-flow">

          <div>
            <strong>क</strong>
            <span>Unvoiced</span>
          </div>

          <div>
            <strong>ख</strong>
            <span>Aspirated</span>
          </div>

          <div>
            <strong>ग</strong>
            <span>Voiced</span>
          </div>

          <div>
            <strong>घ</strong>
            <span>Voiced + Aspirated</span>
          </div>

          <div>
            <strong>ङ</strong>
            <span>Nasal</span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default SoundChart;