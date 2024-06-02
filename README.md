**Project: Product Listing App**

This React application with Next.js and Tailwind CSS builds a responsive product listing page with basic functionalities, including:

- Fetching data from a mock API ([https://fakestoreapi.com/products](https://fakestoreapi.com/products))
- Displaying a grid layout of products
- Search bar for filtering products by name
- Basic product details modal on click

**Tech Stack:**

- Next.js (14.2.3 or later): Server-side rendering framework
- Tailwind CSS: Utility-first CSS framework
- Mock API: [https://fakestoreapi.com/products](https://fakestoreapi.com/products) (for demonstration purposes)


**Installation:**

1. Clone this repository or download the project files.
2. Install required dependencies:

   ```bash
   cd product-mamagement-app
   npm install
   ```

   (or `yarn install` if using yarn)

**Running the Application:**

1. Start the development server:

   ```bash
   npm run dev
   ```

   (or `yarn dev`)

2. Open http://localhost:3000 in your browser to view the application.

**Features and Techniques:**

- **Next.js:**
  - `pages/_app.js`: Provides a layout for all pages, manages Tailwind CSS configuration.
  - Data fetching logic within components or custom hooks (optional for complex data handling).
  - Server-side rendering (SSR) can be explored for better SEO and performance (optional).
- **Tailwind CSS:**
  - Provides a wide range of utility classes for rapid UI styling.
  - Customize the Tailwind configuration in `tailwind.config.js` for your specific needs.
  - Create a `styles/globals.css` file (optional) to define global styles or overrides.
- **Mock API:**
  - Fetches product data from [https://fakestoreapi.com/products](https://fakestoreapi.com/products) for demonstration.
  - Replace this with your actual API endpoint in production.
- **Product Listing:**
  - Implemented using the `Products` component to fetch and display product data.
  - Uses Tailwind's grid classes to create a visually appealing layout.
  - Consider pagination for large product lists (optional).
- **Search Bar:**
  - The `SearchBar` component allows users to filter products by name.
  - Filters are applied to the fetched data before rendering.
- **Product Details Modal:**
  - The `ProductDetailsModal` component displays detailed information about a product when clicked.
  - Opens as a modal overlay using appropriate styling and state management.

**Further Enhancements:**

- **Error Handling:** Implement robust error handling for API fetching and display user-friendly messages.
- **Pagination:** Add pagination for large product sets to improve performance and user experience.
- **Product Details:** Enhance the `ProductDetailsModal` to display more details if available in the API (category, rating, etc.).
- **Testing:** Write unit tests for components using a testing library like Jest and React Testing Library for better code quality.
- **Security:** If handling user authentication or sensitive data, implement proper security measures.
- **Deployment:** Deploy your application to a platform like Vercel or Netlify for easy sharing and production use.
