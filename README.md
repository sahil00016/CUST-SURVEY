CUST-SURVEY: Customer Feedback Survey App
CUST-SURVEY is a React-based web application designed for use inside a retail environment, where customers can provide valuable feedback regarding their shopping experience. The survey is displayed on a kiosk, asking customers a series of five questions related to their satisfaction with the store’s products, pricing, and overall service.

Features
Customer Survey: Asks customers five key questions about their shopping experience.
Interactive UI: Displays the questions one-by-one with a progress indicator.
Rating System: Customers rate their experiences using a 1-5 scale or a 1-10 scale, depending on the question.
Skip and Navigate: Customers can skip a question or navigate to the previous/next question.
Data Persistence: Customer answers are saved locally (or in a database for backend integration).
Session Management: Each survey is associated with a unique session ID to identify different customers.
Thank You Screen: After completing the survey, customers are shown a confirmation screen thanking them for their participation.
Scalable: New questions can be added in the future without breaking the app functionality.
Demo
You can view a demo of the application by visiting Demo Link.

Installation
To set up the project on your local machine, follow these steps:

Prerequisites
Node.js and npm installed on your system.
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/sahil00016/CUST-SURVEY.git
cd CUST-SURVEY
Install Dependencies:

bash
Copy code
npm install
Start the Development Server:

bash
Copy code
npm start
This will start the React development server. You can access the application by navigating to http://localhost:3000 in your browser.

How It Works
Welcome Screen: The user is greeted with a welcome screen and has the option to start the survey.
Survey Flow: The user is presented with five questions. These include product satisfaction, pricing, value for money, recommendation likelihood, and an open-ended feedback question.
Ratings: Questions requiring ratings are answered on a 1-5 or 1-10 scale.
Submission: After the last question, the user is asked to submit their answers.
Thank You: A confirmation screen is shown thanking the customer for their time.
Tech Stack
Frontend: React.js
State Management: React hooks
CSS: Styled-components / plain CSS
Data Storage: Local Storage (could be extended to a backend solution)
Version Control: Git
Future Enhancements
Integrate backend to store survey responses.
Admin dashboard to analyze collected data.
Add more questions dynamically without breaking the app.
Provide multilingual support for broader reach.
Contribution Guidelines
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Notes:
Feel free to customize the "Tech Stack" and "Future Enhancements" sections based on what you are using and planning to implement.
Add a Demo Link if you have deployed the app, or remove that section if it’s not applicable.
Adjust the Installation and How It Works sections based on your project’s final setup.
Let me know if you'd like to add any specific details!
