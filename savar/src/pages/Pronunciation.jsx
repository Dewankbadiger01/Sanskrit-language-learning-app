import { useEffect, useRef, useState } from "react";
import {
  Mic,
  Square,
  Volume2,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const sounds = [
  {
    symbol: "अ",
    name: "a",
    category: "स्वर",
    articulation: "कण्ठ्य",
  },
  {
    symbol: "आ",
    name: "ā",
    category: "स्वर",
    articulation: "कण्ठ्य",
  },
  {
    symbol: "इ",
    name: "i",
    category: "स्वर",
    articulation: "तालव्य",
  },
  {
    symbol: "ई",
    name: "ī",
    category: "स्वर",
    articulation: "तालव्य",
  },
  {
    symbol: "उ",
    name: "u",
    category: "स्वर",
    articulation: "ओष्ठ्य",
  },
  {
    symbol: "क",
    name: "ka",
    category: "क-वर्ग",
    articulation: "कण्ठ्य",
  },
  {
    symbol: "ख",
    name: "kha",
    category: "क-वर्ग",
    articulation: "कण्ठ्य",
  },
  {
    symbol: "ग",
    name: "ga",
    category: "क-वर्ग",
    articulation: "कण्ठ्य",
  },
  {
    symbol: "च",
    name: "ca",
    category: "च-वर्ग",
    articulation: "तालव्य",
  },
  {
    symbol: "ट",
    name: "ṭa",
    category: "ट-वर्ग",
    articulation: "मूर्धन्य",
  },
  {
    symbol: "त",
    name: "ta",
    category: "त-वर्ग",
    articulation: "दन्त्य",
  },
  {
    symbol: "प",
    name: "pa",
    category: "प-वर्ग",
    articulation: "ओष्ठ्य",
  },
];

const Pronunciation = () => {
  const [selectedSound, setSelectedSound] = useState(sounds[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [result, setResult] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const speakSound = () => {
    const utterance = new SpeechSynthesisUtterance(
      selectedSound.symbol
    );

    utterance.lang = "hi-IN";
    utterance.rate = 0.55;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        const url = URL.createObjectURL(audioBlob);

        setAudioURL(url);

        stream.getTracks().forEach((track) => track.stop());

        // Temporary result.
        // Later this will come from Flask + AI.
        setResult({
          score: 87,
          message: "Good pronunciation!",
        });
      };

      mediaRecorder.start();

      setIsRecording(true);
      setRecordingTime(0);
      setResult(null);

      timerRef.current = setInterval(() => {
        setRecordingTime((previous) => previous + 1);
      }, 1000);
    } catch (error) {
      console.error(error);

      alert(
        "Microphone permission is required to record your pronunciation."
      );
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }

    clearInterval(timerRef.current);
    setIsRecording(false);
  };

  const resetRecording = () => {
    setAudioURL(null);
    setResult(null);
    setRecordingTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);

      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [audioURL]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="pronunciation-page">

      {/* HEADER */}

      <section className="pronunciation-header">

        <p className="section-label">
          03 · PRONUNCIATION LAB
        </p>

        <h1>
          Find your
          <span>perfect sound.</span>
        </h1>

        <p>
          Listen to a Sanskrit sound, record your pronunciation,
          and practice until you get it right.
        </p>

      </section>


      {/* MAIN LAB */}

      <section className="pronunciation-lab">

        {/* LEFT */}

        <div className="target-panel">

          <p className="panel-label">
            TARGET SOUND
          </p>

          <div className="target-symbol">
            {selectedSound.symbol}
          </div>

          <h2>{selectedSound.name}</h2>

          <div className="target-meta">

            <span>
              {selectedSound.category}
            </span>

            <span>
              {selectedSound.articulation}
            </span>

          </div>

          <button
            className="hear-button"
            onClick={speakSound}
          >
            <Volume2 size={18} />
            Hear Reference
          </button>

        </div>


        {/* RIGHT */}

        <div className="record-panel">

          <p className="panel-label">
            YOUR PRONUNCIATION
          </p>

          <div
            className={`record-circle ${
              isRecording ? "recording" : ""
            }`}
          >

            {isRecording ? (
              <button
                className="record-action stop"
                onClick={stopRecording}
              >
                <Square size={28} />
              </button>
            ) : (
              <button
                className="record-action"
                onClick={startRecording}
              >
                <Mic size={32} />
              </button>
            )}

          </div>

          <div className="record-status">

            {isRecording ? (
              <>
                <strong>Recording...</strong>
                <span>{formatTime(recordingTime)}</span>
              </>
            ) : (
              <>
                <strong>Tap to record</strong>
                <span>Allow microphone access</span>
              </>
            )}

          </div>


          {/* AUDIO */}

          {audioURL && (
            <div className="recorded-audio">

              <p>YOUR RECORDING</p>

              <audio
                src={audioURL}
                controls
              />

              <button
                className="reset-button"
                onClick={resetRecording}
              >
                <RotateCcw size={15} />
                Record Again
              </button>

            </div>
          )}


          {/* RESULT */}

          {result && (
            <div className="pronunciation-result">

              <div className="result-icon">
                <CheckCircle2 size={24} />
              </div>

              <div>

                <span>PRONUNCIATION SCORE</span>

                <strong>
                  {result.score}%
                </strong>

                <p>
                  {result.message}
                </p>

              </div>

            </div>
          )}

        </div>

      </section>


      {/* SOUND SELECTOR */}

      <section className="sound-selector">

        <div className="selector-heading">

          <div>
            <p className="section-label">
              CHOOSE A SOUND
            </p>

            <h2>
              Practice another sound
            </h2>
          </div>

          <span>
            {sounds.length} sounds
          </span>

        </div>


        <div className="practice-sounds">

          {sounds.map((sound) => (

            <button
              key={sound.symbol}
              className={`practice-sound ${
                selectedSound.symbol === sound.symbol
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedSound(sound);
                resetRecording();
              }}
            >

              <span>
                {sound.symbol}
              </span>

              <small>
                {sound.name}
              </small>

            </button>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Pronunciation;