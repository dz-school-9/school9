// ======== ГОДИННИК ========
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
  
function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear();
    var months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    var tags = ["mon", "d", "y", "h", "m", "s"],
        corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
    for (var i = 0; i < tags.length; i++)
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}
  
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}


// ======== Для ЗОБРАЖЕНЬ ========
// const imageLoad = document.querySelector("img");
// imageLoad.setAttribute(loading, lazy);