import React, { useState } from "react";
import "./Skills.css";
import skillsBg from "../../assets/images/skills bg.png";

// Cloud & Infrastructure
import awsAppSync from "../../assets/icons/aws appsync logo.png";
import awsCognito from "../../assets/icons/AWS-Cognito.svg";
import awsSQS from "../../assets/icons/AWS-SQS-Simple.svg";
import awsS3 from "../../assets/icons/amazon-s3.svg";
import dynamodb from "../../assets/icons/dynamodb.jpeg";
import cloudflare from "../../assets/icons/cloudflare.svg";

// AI & ML
import pandas from "../../assets/icons/pandas.ico";
import numpy from "../../assets/icons/numpy.png";
import huggingFace from "../../assets/icons/huggingface-color.svg";
import seaborn from "../../assets/icons/seaborn.svg";
import langchain from "../../assets/icons/langchain-logo.png";
import langgraph from "../../assets/icons/langgraph-logo.png";

// Tools
import postman from "../../assets/icons/postman-icon.svg";
import stripe from "../../assets/icons/stripe-v2.svg";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Dart", icon: "devicon-dart-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "fas fa-globe",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "GraphQL", icon: "devicon-graphql-plain colored" },
        { name: "Flutter", icon: "devicon-flutter-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
        { name: "Shadcn UI", icon: "fas fa-layer-group" },
        { name: "Socket.io", icon: "devicon-socketio-original" },
        { name: "WebRTC", icon: "fas fa-video" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "fas fa-cloud",
      skills: [
        {
          name: "AWS",
          icon: "devicon-amazonwebservices-plain-wordmark colored"
        },
        { name: "AWS AppSync", image: awsAppSync },
        { name: "AWS Cognito", image: awsCognito },
        { name: "AWS SQS", image: awsSQS },
        { name: "AWS S3", image: awsS3 },
        { name: "DynamoDB", image: dynamodb },
        { name: "Cloudflare R2", image: cloudflare }
      ]
    },
    {
      title: "Database Systems",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MariaDB", icon: "devicon-mariadb-original colored" },
        { name: "Vector Databases", icon: "fas fa-project-diagram" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
        { name: "Keras", icon: "devicon-keras-plain colored" },
        {
          name: "Scikit-learn",
          icon: "devicon-scikitlearn-plain colored"
        },
        { name: "Pandas", image: pandas },
        { name: "NumPy", image: numpy },
        { name: "Hugging Face", image: huggingFace },
        { name: "Matplotlib", icon: "fas fa-chart-line" },
        { name: "Seaborn", image: seaborn },
        {
          name: "LangChain",
          image: langchain,
          custom: true
        },
        {
          name: "LangGraph",
          image: langgraph,
          custom: true
        },
        {
          name: "Neural Machine Translation",
          icon: "fas fa-language"
        }
      ]
    },
    {
      title: "Tools & Integration",
      icon: "fas fa-tools",
      skills: [
        { name: "Postman", image: postman },
        { name: "Stripe", image: stripe },
        {
          name: "Clerk Authentication",
          icon: "fas fa-user-lock"
        }
      ]
    },
    {
      title: "DevOps & Version Control",
      icon: "fas fa-server",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Docker", icon: "devicon-docker-plain colored" }
      ]
    }
  ];

  const selectedCategory = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="skills"
      style={{
        backgroundImage: `linear-gradient(rgba(5,5,5,.8), rgba(5,5,5,.9)), url(${skillsBg})`
      }}
    >
      <h2>Technical Toolkit</h2>

      <div className="skill-category-buttons">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => setActiveCategory(index)}
          >
            <i className={category.icon}></i>
            {category.title}
          </button>
        ))}
      </div>

      <div className="skill-display" key={activeCategory}>
        <h3>
          <i className={selectedCategory.icon}></i>
          {selectedCategory.title}
        </h3>

        <div className="skill-icons">
          {selectedCategory.skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={
                    skill.custom
                      ? "custom-icon rounded-icon"
                      : "custom-icon"
                  }
                />
              ) : (
                <i className={skill.icon}></i>
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}