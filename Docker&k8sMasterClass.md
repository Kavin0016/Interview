# Docker & Kubernetes Masterclass
## Docker:
### SDLC:
- planning,
- design,
- development,
- testing,
- deployment,
- monitoring / observability

#### Dependency Issues:
> Will raise during Development to Deployment journey.

##### Dependencies:
- Application,
  - within project
  - Eg: *package.json* will be the application dependency
- External,
  - like run time environment version and softwares
##### VCS:
Helps in managing the dependencies and versions
> Staging env -> Pre-Prod env -> Prod env

- need to add all the application level dependencies in all the envs which should not be included in git
- time consuming and lots of manual tasks, leads to error,
- if lot of load received in a system, the pods needs to be scaled up

##### WORA: Write Once Read Anywhere
Introduced by **James Gosling**, who build *Java*, follows the pattern **WORA**.
On Top of **OS**, we can place **JVM** which takes care about running the *Java application **any** System*.

1. Docker helps in containerizing the application to overcome the dependency issue.
2. We will create a Instruction in a file called **Dockerfile**, 
   1. Install *Docker* in your machine,
   2. provide the *Dockerfile* to *Docker*,
   3. It creates a build,
   3. It pull all the code from Internet and creates a snapshot, which is called **Docker Image**,
      1. This solves the problem, say, if the code available in the internet at the time, when code is executed but gone away after two day on that time our code will break
   2. provide the Docker Image to Docker to run,
   3. Docker creates **Container**,
   4. any no. of containers can be spin up at a time,
   5. Just like *github*, we will push the *Docker Image* to **Docker Repository**, which is called **Docker Hub** or **Registry**,
      6. Just like **Semver** versioning, there is something called **Tag** in Docker, which help to identify the different versions of the same build,
         7. eg: `appName: tagName` => `app1: v2.0.0`, by default => `app1: latest`,
      8. When ever if there is new update / release it is recommented to go new *Tag* rather than updating the same build. 
   6. Server will pull the *Docker Image* from *Docker Repository* to spin up the server.
   7. A Frontend alone can't ake the system, Backend should also be connected with Frontend to make it as System,
   8. we have to provode context as  to the Docker,
      9. docker build **-t** `app1: v2.0` **-f** `Dockerfile` `.`
         10. `app1: v2.0`: tag name followed by **-t**,
         11. `Dockerfile`: docker file path followed by **-f**,
         12. `.`: context, it always provided at the last, here current directory is the context
   13. `docker image`, list all the images in the machine,
   14. `docker push app1: v2.0.0`, push the image to the docker hub
       15. `app1: v2.0.0`: docker image tag name,
   16. To provide configurations of the applications like port, env variables, components, db, path, network (service to be linked), etc..,
       17. specify all the configurations in the `compose.yaml` run `docker compose up` to spin up,
           18. the service,
               19. Eg: DB should up and run before the BE then BE should up and run before FE
           19. assigns port,
           20. create network between all the service to share information.
       21. This is the ORCHESTRATOR
       22. docker compose attributes:
           23. `volumes:` used to save / mount the DB data in the path, when we pulled down ad then up the pod, the data will be retained from the specofed path,
           24. `build:` path to the context,
           25. `depends on:` the service which the current service depends on, like DB -> BE -> FE,
           26. etc...

> Running Instance of a Docker Image is called Container

##### Dockerfile Example:
```dockerfile
# encapsulting the OS in the Docker Image, which will be pulled from Dokcer Hub or Registry
# use Node.js 16 or later
FROM node:20
# Eg: FROM ubuntu:20.04

# create working dir
WORKDIR /usr/src/app

# copy package.json and package-lock.json to install dependencies
COPY package.json ./

# install dependencies
RUN npm run install

# copy the rest
COPY . .

# expose the port
EXPOSE 3030

RUN ["npx", "nodemon", "server"] 
```
---

### Challenges in Dockerless world:
### Introduction:
### Hands on docker:
### Docker compose:

## Kubernetes (k8s):

Scenario:
Say Flipkart builds their application on Ruby on Rails (Monolith), they have launched the `Big Billion Day`,
on that event there wer more traffic then the team was in the scenario where they to scale the application.
Say, now Flipkart needs to build the Payment gateway which neds to build on Go, which is not possible as per the current tech,
Say, now Flipkart needs to scale up the Payment gateway alone or Payment gateway + Products which is also not possible as per current tech.

This is the place where `MicroService` comes into picture.


Say if we spined up multiple server to serve the load, once any of the server went down, we have to split the existing load
in different server.

We need a *ORCHESTRATION* to handle this kind of scenario, this is the place where **Kubernetes (k8s)** comes into picture.

In simple words, k8s handles scaling up and down, balancing the load handling the server crash.

**k8s** is also called as `Worker Nodes`.

**Control Plane**, where the **`components is configured`**.

Components under Control Plane:
- API Server,
  - Through which we will be interacting with k8s,
- ETCD
  - Key value pair data store, where the configurations get stored
- Controller manager
  - Monitors State of the Cluster
  - It does the job like Scale up / down
- Scheduler
  - It assigns the job

In k8s we create something called **Cluster** which has **Control Plane** and **Worker Node**,

Components in Worker Node:
- Kube proxy,
  - Handles Networking
- Kubelet
  - it creates the pod and maintains the pod lifecycle,
- container run time:
  - run time for containers,
  - k8s create CRI (Container Runtime Interface) to run the container

Components to deploy:
- web app,
- DB


- Minimal Deployable entity is POD in k8s not the application
- Pod can have multiple containers in it.
- Each application can have only one container in a Pod
- There is something called SideCar Container which is in the same Pod, can be used for logging
- There is something called Init Container, which will do all the pre-requitest and spins up the Container
- say if the pods created with IP 10.2.1.1 if the pod die and spined up, the IP address will be different, it may tamper the connect pods in the network,
  - to address this issue we will provide service name as host name
- say if we want to spin up the Staging and PROD env in the same cluster,
  - we will create **Namespace**, we can deploy inside that.
- we use command kubctl which take care of the structure.
  - yaml file -> kubctl -> docker
- kubectl apply -f yaml file path,
  - applies the kubectl and create the pod,
- kubectl get pods -n default,
  - list all the pods,
- kubectl get pods -n masterclass,
- list all the pods in masterclass cluster,

### Microservice,
### Why k8s,
### K8s,
### Depoly on k8s
