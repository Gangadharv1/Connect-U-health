document.addEventListener("DOMContentLoaded", function() {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        window.location.href = './index.html'; 
    }
    const isIndexPage = window.location.pathname.includes('index.html');
    const isAppointmentPage = window.location.pathname.includes('request-appointment.html');
    const doctorProfilesSection = document.getElementById('doctor-profiles');
    const requestAppointmentElements = document.querySelectorAll('.request-appointment-link');

    // Index page specific functionality
    if (isIndexPage) {
        const departmentBoxes = document.querySelectorAll('.department-box');
        const findDoctorsLink = document.getElementById('find-doctor');
        const findDoctorBox = document.querySelector('.box[href="#find-doctors"]');
        const aboutUsLink = document.getElementById('about-us-link');
        const aboutUsSection = document.getElementById('about-us');

        aboutUsLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            aboutUsSection.style.display = 'block';
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        });

        departmentBoxes.forEach(box => {
            box.addEventListener('click', function() {
                const selectedDepartment = this.id;
                doctorProfilesSection.style.display = 'block'; 

                const profiles = document.querySelectorAll('.profile-card');
                profiles.forEach(profile => profile.style.display = 'none');
                profiles.forEach(profile => {
                    if (profile.id === selectedDepartment) {
                        profile.style.display = 'block'; 
                    }
                });

                doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        function showAllDoctorProfiles() {
            doctorProfilesSection.style.display = 'block'; 
            const profiles = document.querySelectorAll('.profile-card');
            profiles.forEach(profile => profile.style.display = 'block');
            doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
        }

        findDoctorsLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            showAllDoctorProfiles();
        });

        findDoctorBox.addEventListener('click', function(event) {
            event.preventDefault(); 
            showAllDoctorProfiles();
        });
    }
       
    //redirect to request-appointment.html
    function redirectToAppointment() {
        window.location.href = "request-appointment.html";
    }
    requestAppointmentElements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            redirectToAppointment();
        });
    });
      

    // Appointment page specific functionality
    if (isAppointmentPage) {
        const specialtyDropdown = document.getElementById('specialty');
        const doctorDropdown = document.getElementById('doctor');

        // Map doctor names to their profile IDs
        const doctorProfileMap = {
            'Dr. Deepika': 'Cardiology',
            'Dr. Ravi Kumar': 'Neurology',
            'Dr. Sanket': 'Orthopedics',
            'Dr. Suman': 'Nephrology',
            'Dr. Sara': 'Gynecology',
            'Dr. Dharani': 'General_surgery',
            'Dr. Prapul': 'Medicine',
            'Dr. Pradeep': 'Cancer_care',
            'Dr. Sushmitha': 'Gastrology'
        };

        // Existing specialty dropdown listener
        specialtyDropdown.addEventListener('change', function() {
            const selectedSpecialty = this.value;
            doctorProfilesSection.style.display = selectedSpecialty ? 'block' : 'none';
            
            if (selectedSpecialty) {
                const profiles = document.querySelectorAll('.profile-card');
                profiles.forEach(profile => profile.style.display = 'none');
                
                const specialtyMap = {
                    'Cardiology': 'Cardiology',
                    'Neurology': 'Neurology',
                    'Orthopedics': 'Orthopedics',
                    'Nephrology': 'Nephrology',
                    'Gynecology': 'Gynecology',
                    'General Surgery': 'General_surgery',
                    'Medicine': 'Medicine',
                    'Cancer Care': 'Cancer_care',
                    'Gastrology': 'Gastrology'
                };

                profiles.forEach(profile => {
                    if (profile.id === specialtyMap[selectedSpecialty]) {
                        profile.style.display = 'block';
                    }
                });
                doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // New doctor dropdown listener
        doctorDropdown.addEventListener('change', function() {
            const selectedDoctor = this.value;
            doctorProfilesSection.style.display = selectedDoctor ? 'block' : 'none';
            
            if (selectedDoctor) {
                const profiles = document.querySelectorAll('.profile-card');
                profiles.forEach(profile => profile.style.display = 'none');
                
                const profileId = doctorProfileMap[selectedDoctor];
                if (profileId) {
                    const selectedProfile = document.getElementById(profileId);
                    if (selectedProfile) {
                        selectedProfile.style.display = 'block';
                        doctorProfilesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
            specialtyDropdown.value = '';
        });
    }
});