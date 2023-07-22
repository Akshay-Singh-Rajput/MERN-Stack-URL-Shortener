
# URL Shortener Web Application

## Description
URL Shortener Web Application is a user-friendly web-based tool that allows users to create shortened versions of long URLs, making them easier to share. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Chakra UI for a visually appealing and responsive user interface.

## Features
- Shorten URLs: Convert long URLs into shortened versions with a single click.
- Custom Short URLs (Optional): Create personalized and memorable links for your URLs.
- Copy to Clipboard: Copy the shortened URL to the clipboard for easy sharing.
- User-friendly Interface: Intuitive and responsive UI design for a seamless user experience.

## Demo
![URL Shortener Demo](https://github.com/Akshay-Singh-Rajput/MERN-Stack-URL-Shortener/assets/97354310/8e5a29d2-1477-486d-bd9c-b9292fe8d224)

## Live Demo
Try out the live demo of the URL Shortener Web Application [here](https://lightlink.vercel.app).

## Installation
To run the URL Shortener Web Application locally, follow these steps:

1. Clone the repository:

2. Install dependencies for both frontend and backend:
   
```cd server```
```npm install```
```cd client```
```npm install```

4. Set up environment variables:
- Create a `.env` file in the root directory and add the following:
  ```
  MONGODB_URI=your-mongodb-uri
  PORT=your-port-number
  ```

4. Start the development server:

  -Server ```npm start```
  -Client ```npm run dev```

The URL Shortener Web Application will be running on `http://localhost:your-port-number`.

## Usage
1. Access the application at `http://localhost:your-port-number` in your web browser.
2. Enter the long URL you want to shorten in the input field.
3. Optionally, you can provide a custom short URL code for the link.
4. Click the "Shorten URL" button to generate the shortened version.
5. The shortened URL will be displayed in the output field, and it will be automatically copied to your clipboard for easy sharing.

## Technologies Used
- Frontend:
- React
- Chakra UI
- React Router
- Axios

- Backend:
- Node.js
- Express
- MongoDB (via Mongoose)

## Deployment
- Backend: Deployed on [Render](https://render.com)
- Frontend: Deployed on [Vercel](https://vercel.com)

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please create a new issue or submit a pull request.

## Contact
For any inquiries or questions, feel free to reach out via [email](mailto:akshaysinghr98@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/akshay-kumar046203/).
