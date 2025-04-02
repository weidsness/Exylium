document.addEventListener("DOMContentLoaded", () => {
    const priceElement = document.getElementById("crypto-price");
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");
    const backdrop = document.getElementById("backdrop");

    function updatePrice() {
        const fakePrice = (Math.random() * 5 + 1).toFixed(2);
        priceElement.textContent = `$${fakePrice}`;
    }

    setInterval(updatePrice, 2000);
    updatePrice();

    // Menu Toggle
    menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("show");
        backdrop.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("show");
        backdrop.classList.remove("show");
    });

    backdrop.addEventListener("click", () => {
        sideMenu.classList.remove("show");
        backdrop.classList.remove("show");
    });

    document.getElementById("connect-wallet").addEventListener("click", () => {
        alert("Wallet connection feature coming soon!");
    });
});
