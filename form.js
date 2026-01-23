const form = document.getElementById('contact-form');

/* contact form shi */
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const jsonData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json.Data)
    });

    if (response.ok) {
      alert('message send successfully.');
      form.reset();
    } else {
      alert('failed to send message.');
    }
  } catch (error) {
    console.error('error:', error);
    alert('an error occurred. check console!')
  }
});
