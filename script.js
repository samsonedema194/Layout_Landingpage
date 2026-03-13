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