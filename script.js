
const toggleButton = document.getElementById('toggleButton');
const navBar = document.getElementById('navBar');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('active'); // Toggle the "active" class
});


  const galleryItems = document.querySelectorAll('.work-item img');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.style.position = 'fixed';
      lightbox.style.top = '0';
      lightbox.style.left = '0';
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.justifyContent = 'center';
      lightbox.style.alignItems = 'center';
      lightbox.style.cursor = 'pointer';
      lightbox.innerHTML = `<img src="${item.src}" style="max-width: 90%; max-height: 90%;">`;
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });

      // Function to store input and show a submission message
    function storeAndSubmit() {
      const inputValue = document.getElementById("userInput").value;
      const outputDiv = document.getElementById("message");

      // Check if input is empty
      if (inputValue.trim() === "") {
        outputDiv.textContent = "Please enter a value!";
        outputDiv.style.color = "red";
        return;
      }

      // Store the value in localStorage
      localStorage.setItem("storedValue", inputValue);

      // Display a submission message
      outputDiv.textContent = "Hello happy to have you here your message has been recieved !!";
      outputDiv.style.color = "white";
      outputDiv.style.backgroundColor = "goldenrod";
      outputDiv.style.padding = "10px";

      // Clear the input field
      document.getElementById("userInput").value = "";
    }

    // Add event listener for button click
    document.getElementById("submitInput").addEventListener("click", storeAndSubmit);

    

