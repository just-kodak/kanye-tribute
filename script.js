function toggleMenu() {
    const nav = document.getElementById("mobile-nav");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

function toggleQuote() {
    const quote = document.getElementById("kanyeQuote");
    quote.style.display = quote.style.display ===
        "none" ? "block" : "none";
}

function saveApparel() {
    const apparel =
        document.getElementById("favApparel").value;
    if (apparel.trim() !== "") {
        localStorage.setItem("kanyeApparel", apparel);
        document.getElementById("savedApparel").innerText =
            "Saved:" + apparel;
    }

}
window.onload = () => {
    const saved = localStorage.getItem("kanyeApparel");
    if (saved) {
        document.getElementById("savedApparel").innerText =
            "Previously saved: " + saved;
    }
}
const backToTopBtn =
    Document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};