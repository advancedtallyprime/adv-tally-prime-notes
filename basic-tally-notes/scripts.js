// === Back-to-Top Button Visibility ===
window.addEventListener("scroll", () => {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return; // Safety check if button doesn't exist yet

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// === Set Page Title in Header (if element exists) ===
document.addEventListener("DOMContentLoaded", () => {
    const pageTitleElement = document.getElementById("pageTitle");
    if (pageTitleElement) {
        pageTitleElement.textContent = document.title;
    }
});


// === Load Header and Footer Dynamically ===
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;

                // Optional: Re-initialize scripts or elements inside loaded content
                // e.g., if header has its own JS, you might need to re-run some logic
            }
        })
        .catch(err => {
            console.error(`Error loading ${elementId}:`, err);
        });
}

// Load header and footer after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("../header.html", "header");
    loadComponent("../footer.html", "footer");
});