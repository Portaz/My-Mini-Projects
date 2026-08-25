/* =====================================================
   PROJECT DATA
   =====================================================

   Available statuses:

   "planned"
   "in-progress"
   "completed"
   "future"

   Change the status of any project whenever you want.
===================================================== */


const projects = [

    {
        title: "Port Scanner",
        description: "Basic TCP port scanner built with Python.",
        icon: "fa-magnifying-glass",
        status: "planned"
    },

    {
        title: "Subnet Calculator",
        description: "Calculate network information from an IP address and CIDR.",
        icon: "fa-network-wired",
        status: "planned"
    },

    {
        title: "Network Monitor",
        description: "Monitor hosts and record connectivity.",
        icon: "fa-satellite-dish",
        status: "planned"
    },

    {
        title: "DNS Lookup Tool",
        description: "Query and display DNS information.",
        icon: "fa-magnifying-glass-chart",
        status: "planned"
    },

    {
        title: "Python Socket Chat",
        description: "Learn TCP client and server communication.",
        icon: "fa-comments",
        status: "planned"
    },

    {
        title: "Network Traffic Logger",
        description: "Log basic network traffic information.",
        icon: "fa-chart-column",
        status: "planned"
    },

    {
        title: "Wireshark Labs",
        description: "Packet-analysis experiments and notes.",
        icon: "fa-flask",
        status: "planned"
    },

    {
        title: "Password Strength Checker",
        description: "Analyze password characteristics.",
        icon: "fa-lock",
        status: "planned"
    },

    {
        title: "File Integrity Checker",
        description: "Detect file changes using hashing.",
        icon: "fa-shield-halved",
        status: "planned"
    },

    {
        title: "Linux Security Toolkit",
        description: "Small scripts for Linux security tasks.",
        icon: "fa-brands fa-linux",
        status: "planned"
    },

    {
        title: "Hashing Demo",
        description: "Explore hashing and file integrity.",
        icon: "fa-key",
        status: "planned"
    },

    {
        title: "Failed Login Analyzer",
        description: "Analyze authentication logs.",
        icon: "fa-triangle-exclamation",
        status: "planned"
    },

    {
        title: "Cybersecurity Notes",
        description: "Document concepts and things I learn.",
        icon: "fa-note-sticky",
        status: "planned"
    },

    {
        title: "Network CLI Toolkit",
        description: "Combine networking utilities into one CLI.",
        icon: "fa-terminal",
        status: "future"
    },

    {
        title: "HTTP Header Checker",
        description: "Inspect HTTP response security headers.",
        icon: "fa-globe",
        status: "planned"
    }

];


/* =====================================================
   STATUS LABELS
===================================================== */

const statusLabels = {
    "planned": "Planned",
    "in-progress": "In Progress",
    "completed": "Completed",
    "future": "Future"
};


/* =====================================================
   PROJECT GRID
===================================================== */

const projectGrid = document.getElementById("projectGrid");


function renderProjects() {

    projectGrid.innerHTML = "";

    projects.forEach((project) => {

        const column = document.createElement("div");

        column.className = "col-12 col-sm-6 col-lg-4 col-xl-3";


        column.innerHTML = `

            <article class="project-card status-${project.status}">

                <div class="project-icon">

                    <i class="fa-solid ${project.icon}"></i>

                </div>


                <h3 class="project-title">
                    ${project.title}
                </h3>


                <p class="project-description">
                    ${project.description}
                </p>


                <div class="project-footer">

                    <span class="status-badge ${project.status}">
                        ${statusLabels[project.status]}
                    </span>


                    <a
                        href="https://github.com/Portaz/My-Mini-Projects#"
                        target="_blank"
                        class="project-link"
                    >
                        View Project
                        <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                    </a>

                </div>

            </article>

        `;


        projectGrid.appendChild(column);

    });

}


/* =====================================================
   STATISTICS
===================================================== */

function updateStatistics() {

    const total = projects.length;

    const inProgress = projects.filter(
        project => project.status === "in-progress"
    ).length;

    const planned = projects.filter(
        project => project.status === "planned"
    ).length;

    const completed = projects.filter(
        project => project.status === "completed"
    ).length;

    const future = projects.filter(
        project => project.status === "future"
    ).length;


    document.getElementById("totalCount").textContent = total;

    document.getElementById("progressCount").textContent = inProgress;

    document.getElementById("plannedCount").textContent = planned;

    document.getElementById("completedCount").textContent = completed;

    document.getElementById("futureCount").textContent = future;

    document.getElementById("totalProjects").textContent = total;

}


/* =====================================================
   INITIALIZE DASHBOARD
===================================================== */

function initializeDashboard() {

    renderProjects();

    updateStatistics();

}


initializeDashboard();