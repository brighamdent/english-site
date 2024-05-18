# Ingles Directo

## Description
Ingles Directo is an online platform crafted specifically for my English teaching business. Seamlessly integrated with Firebase and Stripe, it empowers clients to effortlessly enroll in online classes, manage subscriptions, and access personalized learning experiences. With intuitive features for authentication, subscription management, and account customization, Ingles Directo streamlines the administrative tasks, allowing me to focus on delivering exceptional educational content and fostering a dynamic learning environment.

[View Live Site](https://www.inglesdirecto.com)

## Features
- Authentication through Firebase
- Subscription management (cancel, upgrade, downgrade)
- Account management (change email, change password, etc.)
- Uses custom node.js express server to handle credit card payments through Stripe

## Technologies Used

### TypeScript
Ingles Directo utilizes TypeScript, a typed superset of JavaScript, for enhanced developer productivity and improved code quality. By incorporating static typing, TypeScript helps catch errors early in the development process, ensuring a more robust and maintainable codebase.

### React
The application is built on React, React's component-based architecture allows for the creation of reusable UI elements, promoting code reusability and maintainability.

### Axios
Axios is employed for making HTTP requests in Ingles Directo. As a promise-based HTTP client, Axios simplifies data fetching and interaction with external APIs. Its intuitive API and support for async/await syntax make it an ideal choice for handling asynchronous data operations within the application.

### Tailwind CSS
Ingles Directo utilizes Tailwind CSS, a utility-first CSS framework, for styling the our user interface. Tailwind's utility classes enable rapid prototyping and customization, allowing developers to quickly create visually appealing designs without writing custom CSS. The utility-first approach fosters consistency and scalability in the styling process.

### Firebase
Firebase serves as the backend infrastructure for Ingles Directo, providing a comprehensive suite of services for app development. The application leverages Firebase Authentication for user authentication, Firebase Realtime Database for real-time data synchronization, and Firebase Hosting for seamless deployment and hosting.

#### Firebase Authentication
Firebase Authentication offers secure authentication mechanisms, including email/password authentication and social sign-in methods, ensuring a seamless and secure login experience for users.

#### Firebase Realtime Database
Firebase Realtime Database enables real-time data synchronization between clients, allowing for instant updates and collaboration. Its NoSQL data model provides flexibility and scalability, accommodating the dynamic needs of the application.

### Stripe
Stripe powers the payment processing functionality in Ingles Directo, enabling users to securely make credit card payments for subscription plans. As a leading payment platform, Stripe offers robust APIs and tools for managing billing, ensuring a smooth and reliable payment experience for users.

## Design Choices
In designing Ingles Directo, several key considerations were taken into account to ensure a user-friendly and visually appealing experience. The following design choices were made:

- **Minimalistic UI:** The user interface adopts a minimalistic design approach, focusing on simplicity and clarity to enhance usability and reduce cognitive load.
- **Intuitive Navigation:** Clear and intuitive navigation pathways are implemented to guide users through the application's features and functionalities seamlessly.
- **Responsive Layout:** The application features a responsive layout that adapts to various screen sizes and devices, ensuring a consistent and optimized experience across desktop and mobile platforms.
- **Accessible Design:** Accessibility best practices are followed to ensure that the application is usable by individuals with disabilities. This includes proper semantic markup, keyboard navigation support, and adherence to WCAG guidelines.
- **Visual Feedback:** Interactive elements provide visual feedback to users, such as hover effects, to improve engagement and convey system responses effectively.
- **Branding Elements:** Consistent branding elements, including color schemes, typography, and logo placement, are incorporated to reinforce the Ingles Directo brand identity and create a cohesive user experience.

## Prerequisites

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the prompts to set up a new project.

2. **Add Firebase to your Web App:**
   - After creating the project, click on the "Web" icon (</>) to add Firebase to your web app.
   - Firebase will provide you with a snippet of code containing your configuration keys.

3. **Retrieve Firebase Configuration Keys:**
   - Look for the `apiKey` field in the configuration snippet. This is your Firebase Authentication API key.
   - Copy this key for authentication purposes.

4. **Firebase Realtime Database Access:**
   - Firebase Realtime Database uses the same API key as Firebase Authentication for access control.
   - Set up appropriate rules for your database in the Firebase Console.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/brighamdent/inglesdirecto-site.git
    cd inglesdirecto-site
    ```
2. Make .env File:
- Make a .env file in your root directory
- Add you keys
   - For example:
     ```
     VITE_FIREBASE_API_KEY=your_api_key_here
     VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id

3. Install Dependencies:
    ```bash
    npm install
    ```
4. Run Development Server:
    ```bash
    npm run dev
    ```

Note - If you would like to use you own local payment server please visit the [server
repository](inglesdirecto.com) for more information.

## How to Contribute
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request
