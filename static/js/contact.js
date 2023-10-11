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

const topicSelect = document.getElementById('topic');
    const materialNameDiv = document.getElementById('material-name-div');
    const accountNameDiv = document.getElementById('account-name-div');
    const messageDiv = document.getElementById('message-div');
    const submitDiv = document.getElementById('submit-div');

    topicSelect.addEventListener('change', function () {
        materialNameDiv.style.display = 'none';
        accountNameDiv.style.display = 'none';
        messageDiv.style.display = 'none';
        submitDiv.style.display = 'none';

        if (topicSelect.value === '教材について') {
            materialNameDiv.style.display = 'block';
            messageDiv.style.display = 'block';
        } else if (topicSelect.value === 'アカウントについて') {
            accountNameDiv.style.display = 'block';
            messageDiv.style.display = 'block';
        } else if (topicSelect.value === 'その他') {
            messageDiv.style.display = 'block';
        }

        if(topicSelect.value) {
            submitDiv.style.display = 'block';
        }
    });