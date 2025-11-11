# Thirumanam Devanga Website

Welcome to the Thirumanam Devanga website! This is a React-based web application that provides matrimonial services for the Devanga community.

## How to Run the Website

Follow these simple steps to run the website on your computer:

### Prerequisites

Before you start, make sure you have the following installed on your computer:

1. **Node.js** (version 14 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Follow the installation instructions for your operating system

2. **npm** (comes with Node.js)
   - This is automatically installed when you install Node.js

### Step-by-Step Instructions

1. **Open Terminal/Command Prompt**
   - On Windows: Press `Win + R`, type `cmd`, and press Enter
   - On Mac: Press `Cmd + Space`, type `terminal`, and press Enter
   - On Linux: Press `Ctrl + Alt + T`

2. **Navigate to the Project Directory**
   ```bash
   cd /path/to/thirumanam-devanga
   ```
   Replace `/path/to/thirumanam-devanga` with the actual path where you have saved this project.

3. **Navigate to the packages folder**
   ```bash
   cd packages
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```
   This command will download and install all the required packages. It may take a few minutes.

5. **Start the Website**
   ```bash
   npm start
   ```
   This will start the development server.

6. **View the Website**
   - Your web browser should automatically open
   - If it doesn't, manually open your web browser and go to: http://localhost:3000
   - The website will now be running locally on your computer

### Important Notes

- **Keep the terminal open**: Don't close the terminal/command prompt window while using the website
- **Automatic updates**: Any changes made to the code will automatically refresh the website
- **Stopping the website**: To stop the website, go back to the terminal and press `Ctrl + C`

### Troubleshooting

If you encounter any issues:

1. **"Command not found" error**: Make sure Node.js and npm are properly installed
2. **Port already in use**: If port 3000 is busy, the system will automatically suggest an alternative port
3. **Installation errors**: Try deleting the `node_modules` folder and running `npm install` again

### For Production Deployment

If you want to create a production-ready version of the website:

```bash
npm run build
```

This creates an optimized version in the `build` folder that can be deployed to a web server.

## Support

If you need assistance with running the website, please contact the development team with details about any error messages you encounter.
