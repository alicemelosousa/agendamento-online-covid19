function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdvacina = document.createElement("td");
    tdstatus = document.createElement("td");
    tdmunicipio = document.createElement("td");
    tdlocalizacao = document.createElement("td");
    tddata = document.createElement("td");
    tdhorario = document.createElement("td");


    tdvacina.innerHTML = usuario.vacina
    tdstatus.innerHTML = usuario.status
    tdmunicipio.innerHTML = usuario.municipio
    tdlocalizacao.innerHTML = localizacao
    tddata.innerHTML = usuario.data
    tdhorario.innerHTML = horario


    linha.appendChild(tdvacina);
    linha.appendChild(tdstatus);
    linha.appendChild(tdmunicipio);
    linha.appendChild(tdlocalizacao);
    linha.appendChild(tddata);
    linha.appendChild(tdhorario);

    return linha;
}

function main() {
    let data = fazGet("https://agendamento-edital023.netlify.app/api/agendamentos/");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()


{"data":[{"vacina":"Covid-19","status":"Agendado","municipio":"Natal","localizacao":"Arena das Dunas","data":"18-05-2021","horario":"10h"},