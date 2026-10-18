# Microservice Test Application

![Sample App](https://img.shields.io/badge/Project-Sample%20App-blue?style=flat)
![Architecture](https://img.shields.io/badge/Architecture-Microservices-orange?style=flat)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat&logo=docker&logoColor=white)

Welcome to microservice-shop-testapp!

This repository features a versatile, microservice-based architecture designed as a sandbox for testing, benchmarking, and experimental workflows.

Built upon the core foundation of my personal website, the application utilizes a modern tech stack to explore fullstack microservice communication:

- **Frontend:** Built with **React** for a dynamic, responsive user interface.

- **Backend:** Powered by **Node.js** to handle microservice logic efficiently.


## How to use?

Using **Docker Compose** is recommended for quick deployment. However, the frontend and backend can also be launched independently, which is ideal for testing and active development. Detailed instructions can be found in their respective README.md files within each directory.

### Run with Docker Compose

The only requirements for deployment are Docker and Docker Compose.

1. `docker compose up --build`
2. `http://localhost:3000/`


**Helpful commands**
```bash
docker compose stop

docker compose down
```