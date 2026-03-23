function toggleFAQ(element) {
    // Get the parent FAQ item
    const faqItem = element.parentElement;
    const icon = faqItem.querySelector('.faq-icon');
    
    // Check if it's already active
    const isActive = faqItem.classList.contains('active');

    // Close all other items
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-icon').innerText = '+';
    });

    // Toggle the clicked one
    if (!isActive) {
        faqItem.classList.add('active');
        icon.innerText = '−'; // Changes plus to minus
    }
} 
/**
 * Global Slider Controller
 * @param {string} id - The ID of the slider container
 * @param {number} dir - 1 for Next, -1 for Prev
 */
function moveSlider(id, dir) {
    const slider = document.getElementById(id);
    
    // Check if the slider actually exists
    if (!slider) {
        console.error("Slider with ID '" + id + "' not found!");
        return;
    }

    // Find the first card to measure width
    const card = slider.firstElementChild;
    if (!card) return;

    // Measure card + gap
    const style = window.getComputedStyle(slider);
    const gap = parseInt(style.gap) || parseInt(style.columnGap) || 0;
    const scrollDistance = (card.offsetWidth + gap) * dir;

    // Perform the scroll
    slider.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
    });
    
    console.log("Scrolling " + id + " by " + scrollDistance + "px");
}

