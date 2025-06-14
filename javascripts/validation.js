function emailValidation() {
  const form = document.getElementById('form');
  const email = form.email;
  const emailConfirm = form.email_confirm;
  
  // Add real-time validation for both email fields
  const validateEmails = () => {
    const element = document.getElementById('email-error');
    if (email.value !== emailConfirm.value) {
      // Create error message if it doesn't exist
      if (!element) {
        const errorElement = document.createElement('p');
        errorElement.id = 'email-error';
        errorElement.textContent = "Emails do not match";
        errorElement.style.color = '#d14539';
        // Insert after the parent tr of emailConfirm
        const confirmRow = emailConfirm.closest('tr');
        confirmRow.parentNode.insertBefore(errorElement, confirmRow.nextSibling);
      }
      emailConfirm.style.backgroundColor = 'rgba(230,169,171,.5)';
    } else {
      // Remove error message and reset background
      if (element) {
        element.remove();
      }
      emailConfirm.style.backgroundColor = '';
    }
  };

  // Listen for changes on both email fields
  email.addEventListener('input', validateEmails);
  emailConfirm.addEventListener('input', validateEmails);

  // Handle form submission
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(email.value !== emailConfirm.value) {
      return false;
    } else {
      form.submit();
    }
  });
}

window.onload = emailValidation;