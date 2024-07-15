// ------------------------------------------------------------------------------
// ONV MODAL
// ------------------------------------------------------------------------------

// Function to close the modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Function to handle modal show
function showModal(modal) {
    modal.style.display = "block";
}

// Function to set up modal close events
function setupModalClose(modal) {
    // Event onclick untuk menutup modal ketika mengklik "data-onv-dismiss='modal'"
    let onvCloseModalBtns = modal.querySelectorAll("[data-onv-dismiss='modal']");
    onvCloseModalBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal(modal);
        });
    });

    // Event onclick untuk menutup modal ketika mengklik di luar modal
    window.onclick = function (event) {
        if (event.target.classList.contains('onv-modal')) {
            closeModal(modal);
        }
    };
}

// Helper function to initialize modals
function initializeModal(openBtnSelector, modalId) {
    let openModalBtn = document.querySelector(openBtnSelector);
    let modal = document.getElementById(modalId);

    if (modal) {
        setupModalClose(modal); // Set up close functionality for all modals

        if (openModalBtn) {
            openModalBtn.addEventListener("click", function () {
                showModal(modal);
            });
        }
    }
}

// ------------------------------------------------------------------------------
// Initialize all modals
// ------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    initializeModal("[data-onv-target='#onvModal']", 'onvModal');
    initializeModal("[data-onv-target='#onvModalXl']", 'onvModalXl');
    initializeModal("[data-onv-target='#onvModalLg']", 'onvModalLg');
    initializeModal("[data-onv-target='#onvModalSm']", 'onvModalSm');
    initializeModal("[data-onv-target='#onvModalFs']", 'onvModalFs');
    initializeModal("[data-onv-target='#onvModalPositionTop']", 'onvModalPositionTop');

    // Automatically open the default modal
    let defaultModal = document.getElementById("onvModal");
    if (defaultModal) {
        showModal(defaultModal);
    }
});