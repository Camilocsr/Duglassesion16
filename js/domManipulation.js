/**
 * Módulo para manejo de manipulación del DOM
 * Contiene funciones para modificar elementos del DOM
 * 
 * @author Juan Camilo Solano Rodriguez
 * @version 1.0.0
 */

// Namespace para la manipulación del DOM
var DOMManipulation = (function ($) {
    'use strict';

    /**
     * Registra un evento en el log
     * @param {string} type - Tipo de evento
     * @param {string} message - Mensaje a mostrar
     */
    const logEvent = function (type, message) {
        const timestamp = new Date().toLocaleTimeString();
        const logItem = $('<div>', {
            class: `log-item ${type}`,
            html: `<strong>${timestamp}:</strong> ${message}`
        });

        // Añadir al inicio para que los eventos más recientes estén arriba
        $('#log-eventos').prepend(logItem);

        // Limitar el número de logs para evitar problemas de rendimiento
        const maxLogs = 50;
        if ($('#log-eventos .log-item').length > maxLogs) {
            $('#log-eventos .log-item').slice(maxLogs).remove();
        }
    };

    /**
     * Togglea la visibilidad del elemento h2
     */
    const toggleH2 = function () {
        const $universidad = $('#universidad');
        $universidad.toggleClass('hidden');

        const isVisible = !$universidad.hasClass('hidden');
        logEvent('toggle', `Título universitario ${isVisible ? 'mostrado' : 'ocultado'}`);
    };

    /**
     * Activa/Desactiva un elemento de la lista
     * @param {jQuery} $element - Elemento de la lista
     */
    const toggleListItem = function ($element) {
        $element.toggleClass('active');
        const isActive = $element.hasClass('active');
        const texto = $element.text();

        logEvent('click', `${isActive ? 'Seleccionado' : 'Deseleccionado'}: "${texto}"`);

        // Aplicar efecto de animación
        $element.addClass('animate-pulse');

        // Quitar la clase después de la animación
        setTimeout(() => {
            $element.removeClass('animate-pulse');
        }, 500);
    };

    /**
     * Simula efecto hover en un botón
     * @param {jQuery} $element - Elemento botón
     * @param {boolean} isEnter - Si es entrada (true) o salida (false)
     */
    const buttonHoverEffect = function ($element, isEnter) {
        if (isEnter) {
            $element.css({
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            });
        } else {
            $element.css({
                transform: '',
                boxShadow: ''
            });
        }
    };

    // Funciones públicas del módulo
    return {
        logEvent: logEvent,
        toggleH2: toggleH2,
        toggleListItem: toggleListItem,
        buttonHoverEffect: buttonHoverEffect
    };

})(jQuery);