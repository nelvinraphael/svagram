// Fade-out overlay after 1.8 seconds
window.addEventListener('DOMContentLoaded', function(){
  setTimeout(function(){
    document.getElementById('onload-overlay').classList.add('hide');
  }, 1800);

  // Schedule Appointment (dummy modal)
  var btn = document.getElementById('scheduleBtn');
  if(btn) {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      alert("This would open a Schedule Appointment modal (add a real form here)!");
    });
  }
});

// OPTIONAL: Add more JS features if needed
