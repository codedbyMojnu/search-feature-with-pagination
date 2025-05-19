# Toggle Component (React + Tailwind CSS)

This `Toggle` component is a simple on/off switch built using React and Tailwind CSS. It's reusable, responsive, and comes with smooth animations.

## ✅ Features

- Toggles between ON/OFF states on click
- Smooth animated transition
- Fully customizable using props
- Styled using Tailwind CSS utility classes

## 🧩 How It Works

- `isOn`: A boolean prop that determines the current toggle state
- `onToggle`: A callback function that gets triggered when the toggle is clicked

## 🧪 Usage Example

```jsx
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
```

## 💡 Code Explanation

```jsx
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
```

```jsx
className={... ${isOn ? "bg-green-500" : "bg-gray-400"}}
```

- Background turns green when `isOn` is `true`, otherwise gray.

```jsx
className={... ${isOn ? "translate-x-12" : "translate-x-0"}}
```

- The white circle slides to the right when the toggle is on.

## 🛠️ Requirements

- React 17 or higher
- Tailwind CSS should be properly configured in your project

## 📂 File Structure

```
/src
  └── Toggle.js
```

## 📜 License

This component is free to use in personal and commercial projects.

---

## 🤝 Contribution Guidelines

Want to contribute to this project? Follow these steps:

1. **Fork the repository**

   - Click the `Fork` button on the top-right of this repo.

2. **Clone the repo to your local machine**

   ```bash
   git clone https://github.com/your-username/Toggle.git
   cd Toggle
   ```

3. **Create a new branch**

   ```bash
   git checkout -b feature/your-branch-name
   ```

4. **Make your changes**

   - Add new features or fix bugs.

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "A short but clear commit message"
   ```

6. **Push to GitHub**

   ```bash
   git push origin your-branch-name
   ```

7. **Submit a Pull Request**

   - Open a PR from your forked repository.
   - Describe the changes you’ve made.

### 🧷 Contribution Rules

- Keep your code clean and readable.
- Follow Tailwind CSS best practices.
- Use clear and meaningful commit messages.
- Reference any related issue in the pull request if applicable.

---

**Author:** Md. Mojnu Miah
**Country:** Bangladesh
