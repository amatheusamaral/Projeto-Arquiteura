function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showForm() {
    // Obter valores da área e da data selecionadas
    const area = document.getElementById("area").value;
    const date = document.getElementById("date").value;

    // Exibir as informações na tela de confirmação
    document.getElementById("selected-area").textContent = `Área: ${area}`;
    document.getElementById("selected-date").textContent = `Data: ${date}`;

    // Ir para a tela de confirmação
    showSection('form');
}

function confirmReservation() {
    const area = document.getElementById("area").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const reason = document.getElementById("reason").value;
    const people = document.getElementById("people").value;
    document.getElementById("reservation-summary").innerHTML = `
        <strong>RESERVA CONFIRMADA!</strong><br>
        Área: ${area}<br>
        Data: ${date}<br>
        Horário: ${time}<br>
        Motivo: ${reason}<br>
        Nº de Pessoas: ${people}
    `;
    showSection('confirmation');
}
