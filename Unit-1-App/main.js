//updating with vanilla javascript
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('[name=vanilla]').addEventListener('input', function (e) {
    document.querySelector('h1').innerHTML = "My name is:" + e.target.value
  });
});
