# EJS TinyMCE Blog

<a name="readme-top"></a>

<br />
<div align="center">

  <h3 align="center">EJS TinyMCE Blog</h3>

  <p align="center">
    A simple blog application created using EJS for templating and TinyMCE as a rich text editor for creating blog posts.
    <br />
    <br />
    <a href="https://github.com/cjrussell23/EJS-TinyMCE-Blog"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/cjrussell23/EJS-TinyMCE-Blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/cjrussell23/EJS-TinyMCE-Blog/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This is a simple blog application created primarily for a friend back when I was still learning node and basic front-end.

It uses EJS for templating the pages and TinyMCE as the rich text editor for creating blog posts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [EJS](https://ejs.co/)
- [Express.js](https://expressjs.com/)
- [TinyMCE](https://www.tiny.cloud/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/cjrussell23/EJS-TinyMCE-Blog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file in the root directory and provide the following variables:
   ```sh
   PORT=3000
   MONGODB_URI=<your_mongodb_uri>
   SESSION_SECRET=<your_session_secret>
   EMAIL_ADDRESS=<your_email_address>
   EMAIL_PASSWORD=<your_email_password>
   ```
4. Start the server
   ```sh
   npm start
   ```
5. Open your browser and navigate to http://localhost:3000 to view the website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
