document.addEventListener('DOMContentLoaded', function() {
        var whatsappButton = document.getElementById('whatsappButton');
        var popupOverlay = document.getElementById('popupOverlay');
        var closeBtn = document.getElementById('closeBtn');

        // Mostrar la ventana emergente al hacer clic en el botón de WhatsApp
        whatsappButton.addEventListener('click', function(event) {
            event.preventDefault();
            popupOverlay.style.display = 'block';
        });

        // Cerrar la ventana emergente al hacer clic en el botón de cierre
        closeBtn.addEventListener('click', function() {
            popupOverlay.style.display = 'none';
        });

        // Cerrar la ventana emergente si el usuario hace clic fuera del contenido
        window.addEventListener('click', function(event) {
            if (event.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    });