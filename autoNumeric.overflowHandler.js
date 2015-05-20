
function autoNumeric$overflowHandler($this, value, settings) {
    window.setTimeout(function () {
        $this.addClass('drn-destaque').focus();
        $find($('[id$=wucMensagem]').attr('id')).Show("O valor máximo para o campo destacado foi excedido.", "Validação", 2, 1, "");
    });
}