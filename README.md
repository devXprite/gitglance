<h1 align="center">GitGlance</h1>
<h3 align="center">Tool for visualizing GitHub profiles</h3>
<p align="center">
 <a href="https://gitglance.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/devXprite/gitglance/issues/new?assignees=&labels=bug&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/devXprite/gitglance/issues">Request Feature</a>
</p>
<br/>

<p>GitGlance is a powerful tool for visualizing a developer's GitHub profile, showcasing their contributions, fields of expertise, and much more. With GitGlance, developers can gain insights into their GitHub activity in an intuitive and visually appealing manner.
</p>

## Features
- **GitHub Profile Visualization:** GitGlance provides a comprehensive visualization of a developer's GitHub profile, including their contributions, repositories, and more.
- **Field of Contributions:** Understand the areas in which the developer contributes the most through a graphical representation.
- **GitHub GraphQL API Integration:** Utilizing the GitHub GraphQL API, GitGlance fetches user data directly from GitHub, ensuring accurate and up-to-date information.
- **Next.js & Tailwind CSS:** Built with Next.js for efficient server-side rendering and Tailwind CSS for easy styling and customization.
- **Responsive Design:** GitGlance is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## Installation
To run GitGlance locally, follow these steps:

1. Clone the repository:
   ```bash
    git clone https://github.com/your-username/gitglance.git
   ```

2. Navigate to the project directory:
    ```bash
    cd gitglance
    ```
3. Create a .env file in the root directory of the project by copying the .env.example file:
    ```bash
    cp .env.example .env
    ```
4. Open the .env file and add your GitHub Personal Access Token:
   ```bash
    GITHUB_TOKEN=
   ```
5. Install dependencies:
    ```bash
    npm install
    ```
6. Start the development server:
    ```bash
    npm run dev
    ```
7. Open your browser and visit `http://localhost:3000`
   
    
    
## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. see the LICENSE file for details.

## Acknowledgements

GitGlance utilizes the following technologies and libraries:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)
- [Node.js](https://nodejs.org/)