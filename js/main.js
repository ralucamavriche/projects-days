document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if(!year) return;

    const currentYear = new Date().getFullYear();
    year.textContent = currentYear;
    year.setAttribute("datetime", currentYear);
   
})