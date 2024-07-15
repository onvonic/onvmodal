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
    onvCloseModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            closeModal(modal);
        });
    });

    // Event onclick untuk menutup modal ketika mengklik di luar modal
    window.onclick = function(event) {
        if (event.target.classList.contains('onv-modal')) {
            closeModal(modal);
        }
    };
}

// ------------------------------------------------------------------------------
// OPEN MODAL DEFAULT
// ------------------------------------------------------------------------------
let onvOpenModalBtn = document.querySelector("[data-onv-target='#onvModal']");
let onvModal = document.getElementById('onvModal');
onvOpenModalBtn.addEventListener("click", function() {
    showModal(onvModal);
    setupModalClose(onvModal); // Panggil setupModalClose untuk modal Default
});

// ------------------------------------------------------------------------------
// OPEN MODAL EXTRA LARGE
// ------------------------------------------------------------------------------
let onvOpenModalBtnXl = document.querySelector("[data-onv-target='#onvModalXl']");
let onvModalXl = document.getElementById('onvModalXl');
onvOpenModalBtnXl.addEventListener("click", function() {
    showModal(onvModalXl);
    setupModalClose(onvModalXl); // Panggil setupModalClose untuk modal Extra Large
});

// ------------------------------------------------------------------------------
// OPEN MODAL LARGE
// ------------------------------------------------------------------------------
let onvOpenModalBtnLg = document.querySelector("[data-onv-target='#onvModalLg']");
let onvModalLg = document.getElementById('onvModalLg');
onvOpenModalBtnLg.addEventListener("click", function() {
    showModal(onvModalLg);
    setupModalClose(onvModalLg); // Panggil setupModalClose untuk modal Large
});

// ------------------------------------------------------------------------------
// OPEN MODAL SMALL
// ------------------------------------------------------------------------------
let onvOpenModalBtnSm = document.querySelector("[data-onv-target='#onvModalSm']");
let onvModalSm = document.getElementById('onvModalSm');
onvOpenModalBtnSm.addEventListener("click", function() {
    showModal(onvModalSm);
    setupModalClose(onvModalSm); // Panggil setupModalClose untuk modal Large
});

// ------------------------------------------------------------------------------
// OPEN MODAL FULLSCREEND
// ------------------------------------------------------------------------------
let onvOpenModalBtnFs = document.querySelector("[data-onv-target='#onvModalFs']");
let onvModalFs = document.getElementById('onvModalFs');
onvOpenModalBtnFs.addEventListener("click", function() {
    showModal(onvModalFs);
    setupModalClose(onvModalFs); // Panggil setupModalClose untuk modal Large
});

// ------------------------------------------------------------------------------
// OPEN MODAL POSITION TOP
// ------------------------------------------------------------------------------
let onvOpenModalBtnPositionTop = document.querySelector("[data-onv-target='#onvModalPositionTop']");
let onvModalPositionTop = document.getElementById('onvModalPositionTop');
onvOpenModalBtnPositionTop.addEventListener("click", function() {
    showModal(onvModalPositionTop);
    setupModalClose(onvModalPositionTop); // Panggil setupModalClose untuk modal Large
});