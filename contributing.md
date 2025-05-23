# 📁 1. `.env.example`

এটা তুমি GitHub এ রাখবে যাতে অন্য ডেভেলপাররা জানে কী কী environment variable দরকার। আসল `.env` ফাইল শেয়ার না করে শুধু এই `example` ফাইলটা দিয়েই তারা নিজেরা সেটআপ করতে পারবে।

```env
# 🔐 GitHub API Token
VITE_GITHUB_API=your_personal_github_api_token_here
```

> ⚠️ মনে রাখবে, `.env` ফাইল কখনো GitHub এ কমিট করো না। `.gitignore` এ `.env` অবশ্যই থাকতে হবে।

---

## 📄 2. `CONTRIBUTING.md`

এই ফাইল ডেভেলপারদের দেখায় কীভাবে তোমার প্রজেক্টে কন্ট্রিবিউট করতে হবে।

````md
# 🤝 Contributing Guide

Thank you for showing interest in contributing to this project! 🛠️

Here’s how you can help:

---

## 🔧 Setup Instructions

1. **Fork** this repository.
2. **Clone** your forked version:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
````

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create your `.env` file** using `.env.example` as a reference:

   ```env
   VITE_GITHUB_API=your_personal_github_token
   ```

5. **Run the project**:

   ```bash
   npm run dev
   ```

---

## 🚀 Adding a New Feature

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Write your code and test it well.

3. Commit your changes:

   ```bash
   git commit -m "Add: your meaningful commit message"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request from GitHub.
   Describe what you’ve added and mention if it fixes any issues.

---

## 📜 Code of Conduct

- Be respectful and inclusive.
- Write clean, commented code.
- Test your changes before pushing.
- Keep pull requests small and focused.

---

Thanks again for your contribution!
