let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector('.copy-right-year').textContent = year;

let text = document.lastModified;
document.querySelector('.modify-date').textContent = text;
