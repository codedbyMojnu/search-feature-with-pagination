// App.js (Parent component)
import { useState } from "react";
import Toggle from "./Toggle";

export default function App() {
  const [flashOn, setFlashOn] = useState(false);

  function handleChange() {
    setFlashOn(!flashOn);
  }

  return (
    <div className="mt-2 ml-2">
      <Toggle isOn={flashOn} onToggle={handleChange} />
      <p className="mt-2 text-xl font-bold">
        Flashlight is {flashOn ? "ON 🔦" : "OFF 🌑"}
      </p>
    </div>
  );
}
