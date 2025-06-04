# PRODIGY_FS_Task03
---

# Simple E-commerce Platform

This is a basic full-stack e-commerce application with product listing, shopping cart, and backend product management functionality.

## Features

* 🛍️ Product listing and categorization
* 🧾 Shopping cart with total price calculation (stored in localStorage)
* 📦 REST API for product management (admin use)
* 💾 MongoDB integration for persistent data storage

## Tech Stack

* **Frontend:** HTML, CSS, Vanilla JS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Environment Management:** dotenv

## Folder Structure

```
.
├── routes/
│   └── products.js      # Express routes for product APIs
├── models/
│   └── Product.js       # Mongoose model for products
├── public/
│   ├── index.html       # Home/product listing
│   ├── cart.html        # Cart page
│   └── style.css        # Styling
├── server.js            # Entry point for Express server
├── .env                 # Environment variables (e.g., MONGO_URI)
```

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file and add your MongoDB URI:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
```

4. **Start the server**

```bash
node server.js
```

The backend server will run at `http://localhost:3000`.

5. **Open Frontend**

Open `index.html` and `cart.html` from the `public` folder in your browser.

## API Endpoints

* `GET /api/products` – Fetch all products
* `POST /api/products` – Add a new product (admin use)

## License

MIT License. Feel free to use and modify.

---

