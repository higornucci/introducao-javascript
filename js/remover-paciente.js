let pacientesRemocao = document.querySelectorAll(".paciente");

pacientesRemocao.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});