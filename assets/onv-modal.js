// ------------------------------------------------------------------------------
// ONV MODAL - Dengan Fitur Draggable
// ------------------------------------------------------------------------------
let scrollPosition = 0;

// Function to close the modal
function closeModal(modal) {
    if (!modal) return;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
    modal.style.display = "none";
}

// Function to handle modal show
function showModal(modal) {
    if (!modal) return;
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    
    // Jika bukan modal fullscreen, atur scroll lock
    if (!modal.querySelector('.onv-modal-fs')) {
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }
    
    modal.style.display = "block";
    
    // Jika ini adalah modal fullscreen, tambahkan kelas khusus
    if (modal.querySelector('.onv-modal-fs')) {
        modal.classList.add('modal-fullscreen-active');
    }
    
    // Initialize draggable if modal has draggable class
    if (modal.querySelector('.onv-modal-wrapper.draggable')) {
        initDraggable(modal);
    }
}

// Helper function to initialize modals
function initializeModal(openBtnSelector, modalId) {
    let openModalBtn = document.querySelector(openBtnSelector);
    let modal = document.getElementById(modalId);

    if (modal) {
        if (openModalBtn) {
            openModalBtn.addEventListener("click", function(e) {
                e.preventDefault();
                showModal(modal);
            });
        }
    }
}

// Function to make modal draggable
function initDraggable(modal) {
    // Get the modal wrapper element (which we'll actually drag)
    const wrapper = modal.querySelector('.onv-modal-wrapper.draggable');
    if (!wrapper) return;
    
    // Get the header element to use as handle
    const header = wrapper.querySelector('.onv-modal-header');
    if (!header) return;
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    
    // Center the modal initially if it hasn't been dragged yet
    if (!wrapper.dataset.dragged) {
        wrapper.style.position = 'absolute';
        wrapper.style.margin = '0';
        wrapper.style.top = '50%';
        wrapper.style.left = '50%';
        wrapper.style.transform = 'translate(-50%, -50%)';
    }
    
    // Add the mousedown event to header for drag start
    header.addEventListener('mousedown', dragMouseDown);
    
    function dragMouseDown(e) {
        // Only proceed if left mouse button is clicked (button = 0)
        if (e.button !== 0) return;
        
        // Get the modal content to check if click was on close button
        if (e.target.hasAttribute('data-onv-dismiss') || 
            e.target.closest('[data-onv-dismiss]')) {
            return; // Don't start drag if clicked on close button
        }
        
        e.preventDefault();
        
        // Set position to absolute if not already
        if (wrapper.style.position !== 'absolute') {
            wrapper.style.position = 'absolute';
            wrapper.style.margin = '0';
            
            // Get current position before changing to absolute
            const rect = wrapper.getBoundingClientRect();
            wrapper.style.top = rect.top + 'px';
            wrapper.style.left = rect.left + 'px';
            wrapper.style.transform = 'none';
        }
        
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Mark as being dragged
        wrapper.dataset.dragged = 'true';
        isDragging = true;
        
        // Add the event listeners for dragging and mouse release
        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
        
        // Add a class to indicate dragging is active
        header.classList.add('dragging');
    }
    
    function elementDrag(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Calculate new position
        let newTop = wrapper.offsetTop - pos2;
        let newLeft = wrapper.offsetLeft - pos1;
        
        // Get modal dimensions and viewport size
        const rect = wrapper.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Constrain to viewport (keep at least 50px visible)
        newTop = Math.max(-50, Math.min(newTop, viewportHeight - 50));
        newLeft = Math.max(-50, Math.min(newLeft, viewportWidth - 50));
        
        // Set the element's new position
        wrapper.style.top = newTop + 'px';
        wrapper.style.left = newLeft + 'px';
    }
    
    function closeDragElement() {
        // Stop moving when mouse button is released
        isDragging = false;
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
        
        // Remove dragging class
        header.classList.remove('dragging');
    }
}

// Global event handler for all modals
document.addEventListener('click', function(event) {
    // Handle opening modal via data attribute
    if (event.target.hasAttribute('data-onv-target') || 
        event.target.closest('[data-onv-target]')) {
        
        let triggerElement = event.target.hasAttribute('data-onv-target') ? 
                            event.target : 
                            event.target.closest('[data-onv-target]');
        
        let targetId = triggerElement.getAttribute('data-onv-target');
        // Remove # if present
        targetId = targetId.replace('#', '');
        
        let targetModal = document.getElementById(targetId);
        
        if (targetModal) {
            event.preventDefault();
            showModal(targetModal);
        }
    }

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

// Initialize all modals dynamically when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Cari semua tombol dengan atribut data-onv-target
    const modalTriggers = document.querySelectorAll('[data-onv-target]');
    
    // Inisialisasi setiap modal berdasarkan targetnya
    modalTriggers.forEach(trigger => {
        const targetId = trigger.getAttribute('data-onv-target').replace('#', '');
        initializeModal(`[data-onv-target='#${targetId}']`, targetId);
    });
});
