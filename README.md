# AWS Auto Scaling Demo

## Project Overview

This project demonstrates the deployment of a Node.js application on Amazon Web Services (AWS) using an Application Load Balancer (ALB), Auto Scaling Groups (ASG), Launch Templates, and Amazon CloudWatch.

The application automatically scales EC2 instances based on CPU utilization, ensuring high availability and efficient resource utilization.

---

## Project Objectives

- Deploy a Node.js application on Amazon EC2.
- Configure an Application Load Balancer (ALB).
- Create a Launch Template for EC2 instances.
- Configure an Auto Scaling Group.
- Implement automatic scaling based on CPU utilization.
- Monitor application performance using Amazon CloudWatch.

---

## Technologies Used

- Node.js
- Express.js
- AWS EC2
- Amazon VPC
- Application Load Balancer (ALB)
- Auto Scaling Groups (ASG)
- Launch Templates
- Amazon CloudWatch
- Target Groups
- Ubuntu Linux
- PM2
- Git
- GitHub

---

## AWS Services Used

| Service | Purpose |
|---------|---------|
| Amazon EC2 | Hosts the Node.js application |
| Amazon VPC | Provides network isolation |
| Application Load Balancer | Distributes incoming traffic |
| Target Group | Performs health checks and routes requests |
| Launch Template | Defines EC2 configuration |
| Auto Scaling Group | Automatically scales EC2 instances |
| Amazon CloudWatch | Monitors CPU utilization and triggers scaling |
| Security Groups | Controls inbound and outbound traffic |

---

## Project Architecture

```
                Internet
                    |
                    v
      Application Load Balancer
                    |
             Target Group
                    |
         Auto Scaling Group
            /             \
           /               \
      EC2 Instance     EC2 Instance
       Node.js App      Node.js App
```

---

## Project Structure

```
AWS-AutoScaling-Demo/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Application Features

- Deploys a Node.js application on AWS EC2.
- Uses an Application Load Balancer for traffic distribution.
- Performs automatic health checks.
- Automatically launches new EC2 instances during high CPU utilization.
- Automatically removes unnecessary instances when CPU utilization decreases.
- Demonstrates high availability using AWS Auto Scaling.

---

## Installation

Clone the repository.

```bash
git clone https://github.com/nayandeva/AWS-AutoScaling-Demo.git
```

Move into the project directory.

```bash
cd AWS-AutoScaling-Demo
```

Install dependencies.

```bash
npm install
```

Run the application.

```bash
node app.js
```

The application runs on:

```
http://localhost:3000
```

---


## Demonstration

The project was successfully tested by generating CPU load on the EC2 instance.

The Auto Scaling Group automatically launched additional EC2 instances when CPU utilization exceeded the configured threshold.

After CPU utilization decreased, Auto Scaling terminated the unnecessary instances automatically.

This demonstrates dynamic scaling using Amazon CloudWatch metrics.

## Learning Outcomes

Through this project, I learned:

- AWS EC2 deployment
- Linux server management
- SSH connectivity
- Node.js application deployment
- Application Load Balancer configuration
- Launch Templates
- Auto Scaling Groups
- CloudWatch monitoring
- AWS networking concepts
- Git and GitHub

---

## Conclusion

This project demonstrates the implementation of an Auto Scaling infrastructure on AWS using EC2, Application Load Balancer, Launch Templates, Auto Scaling Groups, and Amazon CloudWatch.

The application successfully scaled out under increased CPU utilization and scaled in when the load decreased, ensuring efficient resource utilization and high availability.
