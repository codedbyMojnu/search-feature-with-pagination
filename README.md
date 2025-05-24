# React Search with API & Dynamic Pagination

A **reusable React component** that lets you search data from any API and display the results in a clean, dynamic pagination UI.

Perfect for developers building fast, user-friendly search experiences without loading all data at once.

## ✨ Features

1. Fetch and display API data based on search queries
2. Paginate results dynamically — no extra work needed
3. Easily plug in your own API by updating just two `.env` values:

```env
VITE_AUTH_TOKEN=your_api_token
VITE_SERVER_BASE_API_URL=your_searchable_api_url
```

### Example API call (inside `hooks/useSearchAPI.js`):

```js
await fetch(`${import.meta.env.VITE_SERVER_BASE_API_URL}=${searchQuery}`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
  },
});
```

---

## Live Demo

See it in action:
👉 [Live Preview](https://search-and-pagination-olive.vercel.app/)

---

## Run Locally for Development

1. **Clone the Repository**

```bash
git clone https://github.com/codedbyMojnu/search-feature-with-pagination.git
cd search-feature-with-pagination
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file in the root folder:

```env
VITE_AUTH_TOKEN=your_github_token
VITE_SERVER_BASE_API_URL=your_searchable_api_url
```

4. **Start the Development Server**

```bash
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Pagination.jsx         # Dynamic pagination UI
│   ├── SearchBox.jsx          # Input field for search
│   └── UsersInfo.jsx          # Renders fetched results
│
├── hooks/
│   └── useGithubUsersAPI.js   # Custom hook for data fetching
│
├── utils/
│   └── get-dynamic-page-numbers.js  # Pagination logic
│
├── constants/
│   └── pagination.js          # Constants (e.g., USERS_PER_PAGE)
│
└── App.jsx
```

Here’s a clear and readable **“Configuration Values”** section you can add to your `README.md` to explain `USERS_PER_PAGE` and `MAX_VISIBLE_PAGE`:

---

## ⚙️ Configuration Values

This component is designed to be **flexible and developer-friendly** — you control how many results show per page and how many page buttons appear in the pagination UI.

Update these values inside `src/constants/pagination.js`:

```js
export const USERS_PER_PAGE = 3; // Number of results to show per page
export const MAX_VISIBLE_PAGE = 5; // Max number of pagination buttons visible at a time
```

## How It Works:

- `USERS_PER_PAGE`
  Controls how many results are shown per page. You can change this to 5, 10, 20 — or anything that suits your layout or data.

- `MAX_VISIBLE_PAGE`
  Controls how many page numbers are shown in the pagination bar at once. If you have many pages, only this number will be shown, with dynamic shifting (e.g., "1 2 3 4 5", then "2 3 4 5 6", etc.).

> This gives you full control to adjust the pagination behavior for any project or dataset.

1. User enters a keyword in the search box.
2. Component fetches search results from your API using that query.
3. Results are paginated automatically (e.g., Page 1, Page 2...).
4. Clicking a page updates the view — no page reloads.

> 🔄 Fast, dynamic browsing experience built with React + Tailwind CSS.

---

## 🤝 Contribute

Want to improve it? You're welcome! 🚀

1. Fork the repo
2. Create your feature branch:
   `git checkout -b feature/your-feature-name`
3. Commit your code:
   `git commit -m "Add your feature"`
4. Push to GitHub:
   `git push origin feature/your-feature-name`
5. Open a Pull Request ❤️

---

## 📄 License

Released under the [MIT License](/LICENSE) — use it, modify it, share it.

---

## 👨‍💻 Made by

### **Md. Mojnu Miah**

React + Tailwind Developer from Bangladesh 🇧🇩
GitHub: [@codedbyMojnu](https://github.com/codedbyMojnu)

> Keep learning. Keep building. Keep sharing.
