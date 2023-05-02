var formulario = document.getElementById('criacao_personagem');

function resetar() {
    formulario.reset()
}

function enviar() {
    formulario.submit()
}

let formularioPersonagem = document.getElementById('criacao_personagem')

formularioPersonagem.addEventListener("submit", (e) => {
    e.preventDefault();

    let nomePersonagem = document.getElementById('campo_nome_personagem');
    let nomeJogador = document.getElementById('campo_nome_jogador');
    let personagemForca = document.getElementById('campo_forca_personagem');
    let personagemHabilidade = document.getElementById('campo_habilidade_personagem');
    let personagemInteligencia = document.getElementById('campo_inteligencia_personagem');
    let personagemVitalidade  = document.getElementById('campo_vitalidade_personagem');
    let personagemResistencia  = document.getElementById('campo_resistencia_personagem');
    let personagemAfinidade = document.getElementById('campo_afinidade_personagem');

    if (nomePersonagem.value == "" || nomeJogador.value == "" || personagemForca.value == "" || personagemHabilidade.value == "" || personagemInteligencia.value == "" || personagemResistencia.value == "" || personagemAfinidade.value == "" || personagemVitalidade.value == "") {
        alert('Por favor, complete todos os campos!');
    } else {
        alert('Personagem criado!');

        nomePersonagem.value = "";
        nomeJogador.value = "";
        personagemForca.value = "";
        personagemHabilidade.value = "";
        personagemInteligencia.value = "";
        personagemVitalidade.value = "";
        personagemResistencia.value = "";
        personagemAfinidade.value = "";

    }
});