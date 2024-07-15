function submitForm() {
    const form = document.getElementById('contact');
    if (!form.checkValidity()) {
            // Mostrar mensaje de error o realizar acciones necesarias
            alert('Por favor completa todos los campos requeridos.');
            return;
        }
    const data = {
        name: form.name.value,
        phone: form.phone.value,
        number_guests: form.number_guests.value,
        date: form.date.value,
        message: form.message.value
    };

    fetch('https://script.google.com/macros/s/AKfycbxQKF_IrYvhtAYjSOm77WmFcgcQuTyoAEFnUK8ktpCH70VGfg_cY7IC6RKHabAaC3uarA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    .then(response => {
        console.log('Datos enviados con éxito.');
        alert('Reserva enviada con éxito.');
        form.reset(); // Limpiar el formulario después de enviar
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar la reserva.');
    });


}