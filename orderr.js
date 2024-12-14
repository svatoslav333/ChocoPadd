<script>
document.querySelector('.registration-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
  const order = document.getElementById('order').value.trim();
    // Убираем стандартное поведение формы
    event.preventDefault();

    // Простая валидация
    if (!name) {
        alert('Введите ваше имя!');
        return;
    }
    if (!validateEmail(email)) {
        alert('Введите корректный e-mail!');
        return;
    }
    if (!validatePhone(phone)) {
        alert('Введите корректный номер телефона!');
        return;
    }

    // Если все ок — отправляем данные
    alert('Форма успешно отправлена!');
    // this.submit(); // Уберите комментарий для реального отправления
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\+?\d{10,14}$/; // Для номеров формата: +1234567890
    return regex.test(phone);
}
</script>
