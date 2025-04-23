// ------------------------------------------------------------------------------
// ONV MODAL
// ------------------------------------------------------------------------------
let scrollPosition = 0;
// Function to close the modal
function closeModal(modal) {
    if (!modal) return;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    modal.style.display = "none";
}

// Function to handle modal show
function showModal(modal) {
    if (!modal) return;
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.top = `-${scrollPosition}px`;
    modal.style.display = "block";
}

// Helper function to initialize modals
function initializeModal(openBtnSelector, modalId) {
    let openModalBtn = document.querySelector(openBtnSelector);
    let modal = document.getElementById(modalId);

    if (modal) {
        // No need to call setupModalClose as we have the global event listener below
        
        if (openModalBtn) {
            openModalBtn.addEventListener("click", function() {
                showModal(modal);
            });
        }
    }
}

// Global event handler for all modals
document.addEventListener('click', function(event) {
    // Handle close button clicks
    if (event.target.hasAttribute('data-onv-dismiss') &&
        event.target.getAttribute('data-onv-dismiss') === 'modal') {
        event.preventDefault();
        event.stopPropagation();
        const modal = event.target.closest('.onv-modal');
        if (modal) {
            closeModal(modal);
        }
    }

    // Handle clicking outside modal
    if (event.target.classList.contains('onv-modal')) {
        closeModal(event.target);
    }
});

// Initialize modals when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize different modal types
    initializeModal("[data-onv-target='#onvModal']", 'onvModal');
    initializeModal("[data-onv-target='#onvModalXl']", 'onvModalXl');
    initializeModal("[data-onv-target='#onvModalLg']", 'onvModalLg');
    initializeModal("[data-onv-target='#onvModalSm']", 'onvModalSm');
    initializeModal("[data-onv-target='#onvModalFs']", 'onvModalFs');
    initializeModal("[data-onv-target='#onvModalPositionTop']", 'onvModalPositionTop');
});
