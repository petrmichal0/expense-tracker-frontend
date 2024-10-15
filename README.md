# Expense Tracker Frontend

## Project Title and Description
Expense Tracker Frontend is a React Native app to help users track their spending. Users can add, edit, and delete expenses, view them by time period, and sync data with the backend.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/b494ee2f-8986-45cc-a705-bafe6ce72082" width="250" alt="Expense Tracker App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation (for Development)](#installation-for-development)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Demo (for End Users)](#demo-for-end-users)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add and manage expenses with descriptions.
- View details of expenses and edit them.
- See expenses by time period (total, last 7 days).
- Delete expenses easily.
- Sync with backend and save data to MongoDB.

## Installation (for Development)

> **Note:** This part is for developers who want to run the app locally.

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Expo CLI**: v6.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/expense-tracker-frontend.git
    ```

2. Go to the project directory:
    ```bash
    cd expense-tracker-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Start the Development Server
To start the development server, run:
```bash
npm start
```

### 2. Run the App on a Device

To run the app on a simulator or real device:

- For Android:
  ```bash
  npm run android
  ```
  
## Backend Information

The backend for this project is hosted at the following URL:

- **Backend API:** [https://expense-tracker-v1-backend-e443d7377cc0.herokuapp.com/](https://expense-tracker-v1-backend-e443d7377cc0.herokuapp.com/)

The source code for the backend is available on GitHub:

- **Backend Repository:** [https://github.com/petrmichal0/expense-tracker-backend](https://github.com/petrmichal0/expense-tracker-backend)

All API endpoints and detailed documentation on how to interact with the backend are provided in the backend repository. If you want to see the available API requests and how to use them, please visit the backend repository's README or relevant documentation files.

## Screenshots

<table>
  <tr>
    <th>Recent Expenses</th>
    <th>All Expenses</th>
    <th>Add Expenses</th>
    <th>Edit Expenses</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/4a25c2f9-fd00-4a2d-ac3a-12060af635e3" target="_blank">
    <img src="https://github.com/user-attachments/assets/4a25c2f9-fd00-4a2d-ac3a-12060af635e3" width="130" height="300" alt="All Places Screen">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/223b201f-ffd1-4b1a-b1e4-0e8ce0a9d757" target="_blank">
    <img src="https://github.com/user-attachments/assets/223b201f-ffd1-4b1a-b1e4-0e8ce0a9d757" width="130" height="300" alt="Place Details">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/59373e37-ff6c-4a96-a00a-e5b9a6324f15" target="_blank">
    <img src="https://github.com/user-attachments/assets/59373e37-ff6c-4a96-a00a-e5b9a6324f15" width="130" height="300" alt="Add Place">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/e6e9ae57-1c5d-4ff5-851d-f01e249628bb" target="_blank">
    <img src="https://github.com/user-attachments/assets/e6e9ae57-1c5d-4ff5-851d-f01e249628bb" width="130" height="300" alt="Pick a Location">
  </a>
</td>
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go

The easiest way to try the app is by using **Expo Go**. Simply download the [Expo Go](https://expo.dev/client) app on your mobile device and scan the QR code below to launch the app:

<img src="https://github.com/user-attachments/assets/2882d905-5e57-4689-a791-035680dd4f1f" alt="QR Code for Expo" width="200">

Alternatively, you can open the app directly in Snack using this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/expense-tracker-frontend?platform=android).

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](link-to-apk)

## Project Structure

```css
Expense Tracker Frontend/
├── assets/
│   ├── adaptive-icon.png
│   ├── icon.png
│   ├── splash.png
├── components/
│   ├── ExpensesOutput/
│   │   ├── ExpenseItem.tsx
│   │   ├── ExpensesList.tsx
│   │   ├── ExpensesSummary.tsx
│   ├── ManageExpense/
│   │   ├── ExpenseForm.tsx
│   │   ├── Input.tsx
│   ├── UI/
│       ├── Button.tsx
│       ├── IconButton.tsx
│       ├── ErrorOverlay.tsx
├── constants/
│   ├── styles.ts
├── screens/
│   ├── AllExpenses.tsx
│   ├── ManageExpense.tsx
│   ├── RecentExpenses.tsx
├── util/
│   ├── api.ts
│   ├── data.ts
├── store/
│   ├── expenses-context.tsx
├── App.tsx
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Technologies Used

[![React Native Badge](https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DAFB)](#)
[![Expo Badge](https://img.shields.io/badge/-Expo-000020?style=for-the-badge&labelColor=black&logo=expo&logoColor=white)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007ACC)](#)

## Third-Party Libraries

- **Axios**: For communication with the backend.
- **React Navigation**: For navigation between screens.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


