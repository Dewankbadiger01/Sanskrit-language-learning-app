import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mic,
  BookOpen,
  Activity,
  Volume2
} from "lucide-react";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            <Volume2 size={16} />
            Sanskrit Phonetics • IKS
          </div>

          <h1>
            Discover the
            <span> Science of Sanskrit Sounds</span>
          </h1>

          <p>
            Learn, hear, classify, and practice Sanskrit vowels
            and consonants through traditional articulation patterns
            and modern speech technology.
          </p>

          <div className="hero-buttons">

            <Link to="/learn" className="primary-btn">
              Start Learning
              <ArrowRight size={18} />
            </Link>

            <Link to="/pronunciation" className="secondary-btn">
              <Mic size={18} />
              Practice Pronunciation
            </Link>

          </div>

        </div>

        <div className="hero-sound">

          <div className="sound-circle">

            <span>अ</span>

            <div className="sound-label">
              <strong>स्वर</strong>
              <small>Vowel</small>
            </div>

          </div>

        </div>

      </section>


      <section className="features">

        <div className="feature-card">
          <BookOpen size={28} />

          <h3>Learn</h3>

          <p>
            Explore Sanskrit vowels and consonants
            through an organized sound system.
          </p>
        </div>


        <div className="feature-card">
          <Volume2 size={28} />

          <h3>Listen</h3>

          <p>
            Hear individual Sanskrit sounds and
            understand their pronunciation.
          </p>
        </div>


        <div className="feature-card">
          <Mic size={28} />

          <h3>Practice</h3>

          <p>
            Record your pronunciation and compare
            it with the target Sanskrit sound.
          </p>
        </div>


        <div className="feature-card">
          <Activity size={28} />

          <h3>Analyze</h3>

          <p>
            Use speech-processing techniques to
            evaluate pronunciation.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Home;