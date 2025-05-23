# 🔍 Search & Dynamic Pagination UI Feature

This project is a simple and effective feature that allows users to:

1. 🔎 Search specific topics through an input field.
2. 🌐 Fetch data from the server using that query via API.
3. 📄 Display the fetched results in a paginated format, dynamically sliced based on the selected page.

The goal is to give a cleaner and faster browsing experience without loading all data at once.

---

## 🚀 Live Site

[Click here to visit the Live Site](https://search-and-pagination-olive.vercel.app/)

---

## 🛠️ How to Run the Project

1. **Clone the repo:**

   ```bash
   git clone https://github.com/codedbyMojnu/search-feature-with-pagination.git
   cd search-feature-with-pagination
   ```

````

2. **Install dependencies:**

   ```bash
   npm install
````

3. **Create your GitHub API key:**

   - Go to your [GitHub Developer Settings](https://github.com/settings/tokens)
   - Create a new token with required permissions
   - Copy the token

4. **Create a `.env` file in the root folder:**

   ```env
   VITE_GITHUB_API=your_api_key
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## 🧠 How It Works

- The **search box** takes user input and triggers an API fetch from GitHub based on the query.
- The data is dynamically sliced per page:

  - Page 1: shows the first set of items.
  - Page 2 or others: shows the next slices accordingly.

- Pagination is dynamically rendered and updates the visible data when a user clicks a page number.

---

## 🤝 How to Contribute

Want to contribute like a boss?

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a Pull Request

All clean and helpful contributions are welcome ❤️

---

## 📄 License

This project is licensed under the [MIT License]("/LICENSE") — feel free to use, share, and build on it.

---

## ✨ Crafted with care by

### **Mojnu**

Your React + Tailwind hero from Bangladesh 🇧🇩
Keep learning, keep building!
