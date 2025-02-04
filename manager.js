document.addEventListener('DOMContentLoaded', () => {
    const candidateSelect = document.getElementById('candidateSelect');
    const interviewDate = document.getElementById('interviewDate');
    const interviewTime = document.getElementById('interviewTime');
    const interviewer = document.getElementById('interviewer');
    const interviewLocation = document.getElementById('interviewLocation');
    const scheduledInterviewsDiv = document.getElementById('scheduledInterviews');
    const searchInput = document.getElementById('search');
    const filterStatus = document.getElementById('filterStatus');
    const applicantTable = document.querySelector('.applicant-overview tbody');
    const applicantNames = [...applicantTable.querySelectorAll('tr')].map(row => row.children[0].textContent);

    applicantNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        candidateSelect.appendChild(option);
    });
    const scheduleButton = document.createElement('button');
    scheduleButton.textContent = 'Schedule Interview';
    scheduleButton.style.marginTop = '20px';
    scheduleButton.style.backgroundColor = '#3498db';
    scheduleButton.style.color = 'white';
    scheduleButton.style.padding = '10px';
    scheduleButton.style.border = 'none';
    scheduleButton.style.borderRadius = '5px';
    scheduleButton.style.cursor = 'pointer';

    document.getElementById('interviewDetails').appendChild(scheduleButton);

    scheduleButton.addEventListener('click', () => {
        const selectedCandidate = candidateSelect.value;
        const date = interviewDate.value;
        const time = interviewTime.value;
        const selectedInterviewer = interviewer.selectedOptions[0].textContent;
        const location = interviewLocation.value;
        if (!selectedCandidate || !date || !time || !selectedInterviewer || !location) {
            alert('Please fill in all fields before scheduling the interview.');
            return;
        }
        const interviewDiv = document.createElement('div');
        interviewDiv.className = 'scheduledInterview';
        interviewDiv.dataset.candidate = selectedCandidate.toLowerCase();
        interviewDiv.dataset.date = date;
        interviewDiv.dataset.status = 'scheduled';
        interviewDiv.style.padding = '15px';
        interviewDiv.style.marginBottom = '10px';
        interviewDiv.style.border = '1px solid #ddd';
        interviewDiv.style.borderRadius = '5px';
        interviewDiv.style.backgroundColor = '#f9f9f9';
        interviewDiv.innerHTML = `
            <strong>Candidate:</strong> ${selectedCandidate}<br>
            <strong>Date:</strong> ${date}<br>
            <strong>Time:</strong> ${time}<br>
            <strong>Interviewer:</strong> ${selectedInterviewer}<br>
            <strong>Location:</strong> ${location}
        `;
        scheduledInterviewsDiv.appendChild(interviewDiv)
        interviewDate.value = '';
        interviewTime.value = '';
        interviewer.value = '';
        interviewLocation.value = '';
    });
    const searchInterviews = () => {
        const query = searchInput.value.toLowerCase();
        const statusFilter = filterStatus.value;

        const interviewEntries = document.querySelectorAll('.scheduledInterview');
        interviewEntries.forEach(entry => {
            const candidate = entry.dataset.candidate;
            const date = entry.dataset.date;
            const status = entry.dataset.status;

            const matchesQuery = candidate.includes(query) || date.includes(query);
            const matchesStatus = statusFilter === 'all' || status === statusFilter;

            if (matchesQuery && matchesStatus) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    };
    searchInput.addEventListener('input', searchInterviews);
    filterStatus.addEventListener('change', searchInterviews);
});
