/**
 * Módulo para manejo de eventos
 * Define y configura todos los manejadores de eventos de la aplicación
 * 
 * @author Juan Camilo Solano Rodriguez
 * @version 1.0.0
 */

// Namespace para manejadores de eventos
var EventHandlers = (function($, DOMManipulation) {
    'use strict';

    /**
     * Configura los eventos de botones
     */
    const setupButtonEvents = function() {
        // 1. Eventos de un botón: Click simple
        $('#btn-click').on('click', function(e) {
            e.preventDefault();
            
            // Aplicar efecto visual
            $(this).addClass('animate-pulse');
            setTimeout(() => {
                $(this).removeClass('animate-pulse');
            }, 500);
            
            // Registrar el evento
            DOMManipulation.logEvent('click', 'Botón "Click Me" fue presionado');
        });

        // Evento de doble click
        $('#btn-doble-click').on('dblclick', function(e) {
            e.preventDefault();
            
            // Aplicar efecto visual
            $(this).addClass('animate-pulse');
            setTimeout(() => {
                $(this).removeClass('animate-pulse');
            }, 500);
            
            // Registrar el evento
            DOMManipulation.logEvent('dblclick', 'Botón "Doble Click Me" fue presionado dos veces');
        });

        // Eventos hover (mouseenter y mouseleave)
        $('#btn-hover')
            .on('mouseenter', function() {
                DOMManipulation.buttonHoverEffect($(this), true);
                DOMManipulation.logEvent('hover', 'Cursor entró al botón "Hover Me"');
            })
            .on('mouseleave', function() {
                DOMManipulation.buttonHoverEffect($(this), false);
                DOMManipulation.logEvent('hover', 'Cursor salió del botón "Hover Me"');
            });
    };

    /**
     * Configura los eventos para el selector de color
     */
    const setupColorSelectorEvents = function() {
        // Variable para almacenar el color seleccionado
        let selectedColor = $('#colorSelector').val();

        // Evento para cambio de color en el selector
        $('#colorSelector').on('change', function() {
            selectedColor = $(this).val();
            DOMManipulation.logEvent('color', `Color seleccionado: ${selectedColor}`);
        });

        // Evento para botones de colores predefinidos
        $('.color-btn').on('click', function() {
            // Quitar selección anterior
            $('.color-btn').removeClass('selected');
            
            // Marcar este botón como seleccionado
            $(this).addClass('selected');
            
            // Obtener el color del botón
            selectedColor = $(this).data('color');
            
            // Actualizar el selector de color
            $('#colorSelector').val(selectedColor);
            
            DOMManipulation.logEvent('color', `Color predefinido seleccionado: ${selectedColor}`);
        });

        // Evento para aplicar color a los elementos seleccionados
        $('#applyColor').on('click', function() {
            const $selectedItems = $('.list-item.active');
            
            if ($selectedItems.length > 0) {
                $selectedItems.css('background-color', selectedColor);
                DOMManipulation.logEvent('color', `Color ${selectedColor} aplicado a ${$selectedItems.length} elemento(s)`);
            } else {
                DOMManipulation.logEvent('color', 'No hay elementos seleccionados para aplicar color');
                alert('Primero seleccione uno o más elementos de la lista');
            }
        });

        // Evento para resetear colores
        $('#resetColor').on('click', function() {
            $('.list-item').css('background-color', '').removeClass('active');
            DOMManipulation.logEvent('color', 'Colores de todos los elementos reseteados');
        });
    };

    /**
     * Configura los eventos de la lista
     */
    const setupListEvents = function() {
        // 2. Eventos en una lista
        $('.list-item').on('click', function() {
            // Gestionar selección mediante jQuery
            const $this = $(this);
            
            // Toggle de la selección
            $this.toggleClass('active');
            
            if ($this.hasClass('active')) {
                DOMManipulation.logEvent('click', `Seleccionado: "${$this.text()}"`);
            } else {
                // Si se deselecciona, volvemos al color original
                $this.css('background-color', '');
                DOMManipulation.logEvent('click', `Deseleccionado: "${$this.text()}"`);
            }
            
            // Aplicar efecto de animación
            $this.addClass('animate-pulse');
            setTimeout(() => {
                $this.removeClass('animate-pulse');
            }, 500);
        });

        // Eventos adicionales para la lista
        $('.list-item')
            .on('mouseenter', function() {
                const $this = $(this);
                // Solo cambiamos color hover si no está activo
                if (!$this.hasClass('active')) {
                    $this.css('background-color', '#e9ecef');
                }
                DOMManipulation.logEvent('hover', `Cursor entró al elemento: "${$(this).text()}"`);
            })
            .on('mouseleave', function() {
                const $this = $(this);
                // Solo revertir el color si no está activo
                if (!$this.hasClass('active')) {
                    $this.css('background-color', '');
                }
                DOMManipulation.logEvent('hover', `Cursor salió del elemento: "${$this.text()}"`);
            });
    };

    /**
     * Configura el evento para mostrar/ocultar el título H2
     */
    const setupToggleH2Event = function() {
        // 3. Evento para desaparecer h2
        $('#btn-toggle-h2').on('click', function() {
            DOMManipulation.toggleH2();
        });
    };

    /**
     * Inicializa todos los manejadores de eventos
     */
    const init = function() {
        setupButtonEvents();
        setupListEvents();
        setupColorSelectorEvents();
        setupToggleH2Event();
        
        // Registrar que se inicializaron los eventos
        DOMManipulation.logEvent('init', 'Todos los manejadores de eventos inicializados correctamente');
    };

    // API pública del módulo
    return {
        init: init
    };

})(jQuery, DOMManipulation);