document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    
    if (name && phone && state) {
        const message = `مرحباً، أريد طلب جهاز تنقية المياه. الاسم: ${name}، رقم الهاتف: ${phone}، الولاية: ${state}`;
        const whatsappUrl = `https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('يرجى ملء جميع الحقول');
    }
});