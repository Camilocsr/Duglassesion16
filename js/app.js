/**
 * Punto de entrada principal de la aplicación
 * Inicializa todos los componentes y módulos
 * 
 * @author Juan Camilo Solano Rodriguez
 * @version 1.0.0
 */

// Aplicación principal - Patrón IIFE para evitar variables globales
const App = (function ($, EventHandlers, DOMManipulation) {
    'use strict';

    /**
     * Función de inicialización
     * Se ejecuta cuando el DOM está completamente cargado
     */
    const init = function () {
        console.log('Iniciando aplicación de eventos jQuery...');

        // Inicializar manejadores de eventos
        EventHandlers.init();

        // Registrar inicio de la aplicación
        DOMManipulation.logEvent('init', 'Aplicación inicializada correctamente');

        console.log('Aplicación inicializada correctamente.');
    };

    // API pública del módulo
    return {
        init: init
    };

})(jQuery, EventHandlers, DOMManipulation);

// Inicializar la aplicación cuando el DOM esté completamente cargado
$(document).ready(function () {
    App.init();
});