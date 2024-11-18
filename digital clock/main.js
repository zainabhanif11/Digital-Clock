
function updateClock() {
    const now = new Date();
    
    // Get time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Get date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Update time and date
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}, ${date} ${month} ${year}`;
  }
  
  // Theme toggle
  const toggleButton = document.getElementById('theme-toggle');
  let isDarkMode = false;
  
  toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.className = isDarkMode ? 'dark' : 'light';
    toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
  
  // Initialize
  document.body.className = 'light';
  updateClock();
  setInterval(updateClock, 1000);
  