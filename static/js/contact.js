document.querySelector("#contact-form").addEventListener('submit', function(e) {
    e.preventDefault();
    fetch("/", {
        method: 'POST',
        body: new FormData(this),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.querySelector("#contact-form").reset();
    });
});
