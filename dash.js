document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".app-list input");
    const tableRows = document.querySelectorAll(".app-list tbody tr");
  
    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      tableRows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        row.style.display = rowText.includes(searchValue) ? "" : "none";
      });
    });
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const action = e.target.innerText;
        alert(`${action} button clicked.`);
      });
    });
  
    const quickActionButtons = document.querySelectorAll(".quick-actions button");
    quickActionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert(`${button.innerText} action triggered.`);
      });
    });
    const updateMetrics = () => {
      const totalApplications = 100;
      const applicationsInReview = 30;
      const shortlistedCandidates = 20;
      const interviewsScheduled = 10;
      document.querySelector(".metrics").innerHTML = `
        <div class="metric"><h2>Total Applications</h2><p>${totalApplications}</p></div>
        <div class="metric"><h2>Applications in Review</h2><p>${applicationsInReview}</p></div>
        <div class="metric"><h2>Shortlisted Candidates</h2><p>${shortlistedCandidates}</p></div>
        <div class="metric"><h2>Interviews Scheduled</h2><p>${interviewsScheduled}</p></div>
      `;
    };
  
    updateMetrics();
  });  