//Setup breakpoint value we can query throughout our app
window.bokkaBreakpoint = {
    refreshValue : function () {
        window.bokkaBreakpoint.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    }
}
window.bokkaBreakpoint.refreshValue();
