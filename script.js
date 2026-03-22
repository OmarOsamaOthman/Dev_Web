let projectCard =
    `
    <div class="projectCard">
        <img src="${cardImageLink}" alt="${projectName}">

        <h3>${projectName}</h3>

        <div class="tech-stack">
            <ul>
                ${(`<li>${skillName}</li>`).repeat(techStackNum)}
            </ul>
        </div>

        <div class="project-links">
            <a href="${liveDemoLink}" target="_blank">
                <img src="" alt="DemoIcon">
                Live Demo
            </a>

            <a href="${gitHubProjectLink}" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="github">
                GitHub
            </a>
        </div>

    </div>
`

let skillCard =
    `
    <div class="skl">
        <h3>${skillName}</h3>
        <span class="${skillCategory}-category">${skillCategory}</span>
    </div>
`
