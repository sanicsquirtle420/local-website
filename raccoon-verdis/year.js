function footer_year() {
    const d = new Date() ;
    let year = d.getFullYear() ;
    return "Hosted by VerdisHost - Diego R. (" + year + ")" ;
}
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("footer-p").innerHTML = footer_year() ; 
}) ;