// Toggle.js

export default function Toggle({ isOn, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-24 h-12 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300
        ${isOn ? "bg-green-500" : "bg-gray-400"}`}
    >
      <div
        className={`w-10 h-10 rounded-full bg-white shadow-md transition-transform duration-300
          ${isOn ? "translate-x-12" : "translate-x-0"}`}
      />
    </div>
  );
}
