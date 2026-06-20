# 📊 MY SEM SCORE

A modern, responsive, and dynamic web application that helps students calculate, track, and save their academic performance (SGPA, CGPA, and Percentages) seamlessly.

## ✨ Features

- **SGPA Calculator:** Dynamically add subjects, credits, and grades to calculate Semester Grade Point Average.
- **CGPA Calculator:** Aggregate multiple semesters to calculate your overall Cumulative Grade Point Average.
- **Percentage Converter:** Instantly convert your CGPA into a standard percentage.
- **User Authentication:** Secure email and password authentication powered by Google Firebase, featuring mandatory email verification links, strict password rules (8+ chars), and password recovery.
- **Cloud Dashboard:** A secure, authenticated dashboard that fetches your saved academic records from Firestore. Features full CRUD capabilities allowing users to Create, Read, Update, and Delete their historical records.
- **Modern UI/UX:** A stunning "glassmorphism" aesthetic built with Tailwind CSS, featuring smooth transitions, micro-animations, toast notifications, and a fully functional Dark/Light mode toggle.
- **One-Click Copy:** Easily copy your raw calculated results to your clipboard with a single click.

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Tailwind CSS (via CDN)
- **Backend/Database:** Google Firebase (Firestore NoSQL Database)
- **Authentication:** Firebase Authentication

## 🚀 Getting Started

### Prerequisites

To run this project locally, you don't need any complex build tools. A simple local web server will do.
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (or any equivalent local server)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-HariPanasa/my-sem-score.git
   ```
2. Open the project folder in VS Code.
3. Replace the Firebase configuration:
   - Create a project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Email/Password Authentication** and **Firestore Database**.
   - Copy your config object and replace the placeholder in `firebase-config.js`.
4. Right-click on `index.html` and select **"Open with Live Server"**.

## 📱 Screenshots

*(Add screenshots of your application here. You can drag and drop images directly into your GitHub repository and link them below)*

- **Home Page**
  (https://kommodo.ai/i/vRYNrnAMC2zE29PFZWQX)`
- **Dark Mode UI**  
  https://kommodo.ai/i/Nz3ksEeUlm1JrT8YolV5
- **Dashboard**  
  (https://kommodo.ai/i/07NZNUbA3MT3NJUFUYRM)
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
