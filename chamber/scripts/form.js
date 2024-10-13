const now = new Date();
const timestamp = now.toISOString();
console.log("Timestamp set: ", timestamp);

document.getElementById('timestamp').value = timestamp;


function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Event listeners for opening modals
document.getElementById('np-membership').addEventListener('click', function() {
    openModal('np-modal');
});

document.getElementById('bronze-membership').addEventListener('click', function() {
    openModal('bronze-modal');
});

document.getElementById('silver-membership').addEventListener('click', function() {
    openModal('silver-modal');
});

document.getElementById('gold-membership').addEventListener('click', function() {
    openModal('gold-modal');
});

// Event listeners for closing modals
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        const modalId = this.getAttribute('data-close');
        closeModal(modalId);
    });
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});