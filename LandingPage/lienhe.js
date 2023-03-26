const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Vui lòng nhập đầy đủ thông tin Tên, Email và Nội dung tin nhắn!');
    } else {
        alert('Thông tin liên hệ của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi lại sớm nhất có thể.');
        form.reset();
    }
});