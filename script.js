document.addEventListener("DOMContentLoaded", function() {
  // Display the username
  const usernameDisplay = document.getElementById('username-display');
  const username = localStorage.getItem('username');
  
  if (usernameDisplay) {
    if (username) {
      usernameDisplay.textContent = username; // Show username on dashboard
    } else {
      alert('You are not logged in.');
      window.location.href = 'login.html'; // Redirect to login if not logged in
    }
  }

  // Handle Logout functionality
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      alert('Logged out successfully!');
      window.location.href = 'login.html'; // Redirect to login after logout
    });
  }

  // Progress Bars
  const htmlProgress = document.getElementById('html-progress');
  const cssProgress = document.getElementById('css-progress');
  const pythonProgress = document.getElementById('python-progress');

  // Retrieve progress from localStorage
  let htmlProgressValue = localStorage.getItem('html-progress') || 0;
  let cssProgressValue = localStorage.getItem('css-progress') || 0;
  let pythonProgressValue = localStorage.getItem('python-progress') || 0;

  // Update progress bars and labels
  updateProgressBar(htmlProgress, htmlProgressValue, 3);
  updateProgressBar(cssProgress, cssProgressValue, 3);
  updateProgressBar(pythonProgress, pythonProgressValue, 3);

  // Start Learning Button functionality
  const startLearningBtn = document.getElementById('start-learning-btn');
  if (startLearningBtn) {
    startLearningBtn.addEventListener('click', function() {
      window.location.href = 'lessons.html'; // Redirect to lessons page
    });
  }
});

// Update progress bar function
function updateProgressBar(progressElement, currentValue, totalValue) {
  const percentage = (currentValue / totalValue) * 100;
  progressElement.style.width = percentage + '%';
  progressElement.textContent = ${currentValue} / ${totalValue};
}




function completeLesson(lesson) {
  let progress = localStorage.getItem(lesson + '-progress') || 0;
  if (progress < 3) {
    progress++;
    localStorage.setItem(lesson + '-progress', progress); // Save the progress
    alert(lesson.charAt(0).toUpperCase() + lesson.slice(1) + ' lesson completed!');
    updateLessonButton(lesson); // Update the button state
  }
}

// Function to update the lesson button based on progress
function updateLessonButton(lesson) {
  let progress = localStorage.getItem(lesson + '-progress') || 0;
  if (progress >= 3) {
    document.getElementById('complete-' + lesson).disabled = true; // Disable button when lesson is completed
    document.getElementById(lesson + '-lesson').innerHTML = ${lesson.charAt(0).toUpperCase() + lesson.slice(1)} Lesson Completed;
  }
}

// Check initial progress for each lesson and update button state
document.addEventListener("DOMContentLoaded", function() {
  updateLessonButton('html');
  updateLessonButton('css');
  updateLessonButton('python');
});document.getElementById('logoutBtn').addEventListener('click', function () {
  // Clear local storage or session data
  localStorage.clear();

  // Redirect to login page
  window.location.href = 'login.html';
});
