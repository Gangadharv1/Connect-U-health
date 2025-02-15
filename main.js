document.addEventListener("DOMContentLoaded", function() {
   
    const departmentBoxes = document.querySelectorAll('.department-box');
    const doctorProfilesSection = document.getElementById('doctor-profiles');
    const findDoctorsLink = document.getElementById('find-doctor');

    // Show doctor profiles when a department is clicked
    departmentBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const selectedDepartment = this.id;
            doctorProfilesSection.style.display = 'block'; 

            // Hide all doctor profiles initially
            const profiles = document.querySelectorAll('.profile-card');
            profiles.forEach(profile => {
                profile.style.display = 'none'; 
            });

            // Show only the profiles that match the selected department
            profiles.forEach(profile => {
                if (profile.id === selectedDepartment) {
                    profile.style.display = 'block'; 
                }
            });

            // Scroll to the doctor profiles section
            doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show all doctor profiles when "Find Doctors" is clicked
    findDoctorsLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        doctorProfilesSection.style.display = 'block'; 

        // Show all doctor profiles
        const profiles = document.querySelectorAll('.profile-card');
        profiles.forEach(profile => {
            profile.style.display = 'block'; 
        });

        // Scroll to the doctor profiles section
        doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
        
    });
});