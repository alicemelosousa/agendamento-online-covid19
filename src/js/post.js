
function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function logar() {
    event.preventDefault()
    let url = "https://agendamento-edital023.netlify.app/api/transparencia"
    let input = document.getElementById("input").value
    let email = document.getElementById("email").value
    console.log(input)
    console.log(email)

    body = {
        "input": input,
        "email": email
    }

    fazPost(url, body)
}