document.addEventListener("DOMContentLoaded", () => {
    const roleDropdown = document.getElementById("role");
    const jobDescription = document.getElementById("job-description");
    const requirementsList = document.getElementById("requirements-list");
    const opportunityId = document.querySelector("#job-requirements p strong");
    const jobData = {
        Developer: {
            description: "As a Developer, you will design, code, and maintain software systems. Collaborate with teams to deliver innovative solutions.",
            requirements: [
                "Proficiency in programming languages (e.g., Java, Python, JavaScript).",
                "Strong problem-solving and analytical skills.",
                "Excellent teamwork and communication abilities.",
                "Relevant degree or equivalent experience."
            ],
            id: "DEV-12345"
        },
        Designer: {
            description: "As a Designer, you will create visually compelling designs and work closely with developers to ensure a seamless user experience.",
            requirements: [
                "Expertise in design tools (e.g., Adobe XD, Figma, Photoshop).",
                "A strong portfolio demonstrating creative skills.",
                "Ability to understand user needs and create intuitive designs.",
                "Strong communication and collaboration skills."
            ],
            id: "DES-23456"
        },
        "Front-end": {
            description: "As a Front-end Engineer, you will build and optimize the client side of applications for maximum speed and scalability.",
            requirements: [
                "Strong knowledge of HTML, CSS, and JavaScript.",
                "Experience with front-end frameworks (e.g., React, Angular, Vue).",
                "Ability to translate design wireframes into high-quality code.",
                "Understanding of cross-browser compatibility issues."
            ],
            id: "FE-34567"
        },
        "Back-end": {
            description: "As a Back-end Engineer, you will build and maintain the server-side logic of applications.",
            requirements: [
                "Proficiency in server-side languages (e.g., Node.js, Python, Java).",
                "Experience with database systems (e.g., MySQL, MongoDB).",
                "Understanding of RESTful APIs and microservices.",
                "Ability to write scalable and secure code."
            ],
            id: "BE-45678"
        },
        QA: {
            description: "As a QA/Tester, you will ensure the quality and reliability of software through thorough testing and debugging.",
            requirements: [
                "Experience in manual and automated testing techniques.",
                "Knowledge of testing tools (e.g., Selenium, JUnit).",
                "Strong attention to detail and problem-solving skills.",
                "Ability to create comprehensive test plans and reports."
            ],
            id: "QA-56789"
        }
    };
    roleDropdown.addEventListener("change", () => {
        const selectedRole = roleDropdown.value;

        if (jobData[selectedRole]) {
            jobDescription.textContent = jobData[selectedRole].description;
            opportunityId.textContent = `Opportunity ID: ${jobData[selectedRole].id}`;
            requirementsList.innerHTML = "";
            jobData[selectedRole].requirements.forEach((req) => {
                const li = document.createElement("li");
                li.textContent = req;
                requirementsList.appendChild(li);
            });
        }
    });
});
