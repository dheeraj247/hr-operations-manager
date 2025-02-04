const applicantForm = document.getElementById('applicantForm');
const resumeInput = document.getElementById('resume');

applicantForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const file = resumeInput.files[0];
    if (file && !validateFileType(file.name)) {
        alert('Please upload a valid resume file (PDF, DOC, or DOCX).');
        return;
    }

    alert('Application submitted successfully! We will contact you soon.');
    applicantForm.reset(); 
});

function validateFileType(fileName) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    return allowedExtensions.test(fileName);
}
