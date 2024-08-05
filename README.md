# WEE BLOG

## Overview

This is a simple blog application built using Vue.js that allows users to create, read, update, and delete blog posts. The application includes a responsive design to ensure it works well on different screen sizes.

## Features

- **Create**: Add new blog posts.
- **Read**: View a list of blog posts and detailed information about each post.
- **Update**: Edit existing blog posts.
- **Delete**: Remove blog posts.
- **Responsive Design**: Fully functional on various screen sizes.

## Components

The application consists of the following components:

- **BlogListComponent**: Displays a list of blog posts.
- **BlogDetailComponent**: Shows detailed information about a selected blog post.
- **BlogFormComponent**: Provides a form to create or edit a blog post.
- **HeaderComponent**: Contains navigation links.
- **FooterComponent**: Displays additional information such as contact details and social media links.

## Services/State Management

The application uses a service or state management for blog posts with the following methods:

- `getPosts()`: Fetch all blog posts.
- `getPostById(id: number)`: Fetch a single blog post by ID.
- `addPost(post: BlogPost)`: Add a new blog post.
- `updatePost(post: BlogPost)`: Update an existing blog post.
- `deletePost(id: number)`: Delete a blog post by ID.

## Routing

The application includes the following routes:

- `/blogs`: Displays the list of blog posts using the `BlogListComponent`.
- `/blogs/:id`: Displays detailed information about a blog post using the `BlogDetailComponent`.
- `/create`: Shows a form to create a new blog post using the `BlogFormComponent`.
- `/edit/:id`: Displays a form to edit an existing blog post using the `BlogFormComponent`.

## Responsive Design

The application is designed to be fully responsive and provides a seamless experience on various screen sizes.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   git clone 

2. **Navigate to the project directory:
    cd weeblog  # Change to the directory where you cloned the project.

3. **Install dependencies:
    npm install  # This command installs the dependencies specified in your package.json file using npm.


4. **Run the application
    npm run serve  # Starts the development server for your Vue.js application. This command should work with your Vue CLI version.

5. **Open your browser and visit:
    http://localhost:8080  # Open this URL in your browser to view your running Vue.js application. If you’ve configured a different port, adjust the URL accordingly.

Preferred Versions
Node.js: v20.10.0
Vue CLI: 5.0.8



