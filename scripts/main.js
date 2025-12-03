// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            // Clear previous error messages
            clearErrors();

            let hasErrors = false;

            // Validate name
            if (name === '') {
                showError('name', 'Name is required');
                hasErrors = true;
            }

            // Validate email
            if (email === '') {
                showError('email', 'Email is required');
                hasErrors = true;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                hasErrors = true;
            }

            // Validate subject
            if (subject === '') {
                showError('subject', 'Please select a subject');
                hasErrors = true;
            }

            // Validate message
            if (message === '') {
                showError('message', 'Message is required');
                hasErrors = true;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                hasErrors = true;
            }

            if (hasErrors) {
                e.preventDefault();
                return false;
            }

            // Using mailto: to send email
            e.preventDefault();
            const mailtoLink = `mailto:where-stuff-support@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.location.href = mailtoLink;
        });

        // Real-time validation feedback
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                // Clear error when user starts typing
                if (this.classList.contains('error')) {
                    clearFieldError(this);
                }
            });
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error for a specific field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
        field.style.borderColor = '#FF3B30';
        
        // Create or update error message
        let errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.style.color = '#FF3B30';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            errorElement.style.display = 'block';
            field.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
}

// Clear error for a specific field
function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// Clear all errors
function clearErrors() {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        clearFieldError(field);
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;

    clearFieldError(field);

    switch (fieldId) {
        case 'name':
            if (value === '') {
                showError('name', 'Name is required');
                return false;
            }
            break;
        case 'email':
            if (value === '') {
                showError('email', 'Email is required');
                return false;
            } else if (!isValidEmail(value)) {
                showError('email', 'Please enter a valid email address');
                return false;
            }
            break;
        case 'subject':
            if (value === '') {
                showError('subject', 'Please select a subject');
                return false;
            }
            break;
        case 'message':
            if (value === '') {
                showError('message', 'Message is required');
                return false;
            } else if (value.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                return false;
            }
            break;
    }
    return true;
}

