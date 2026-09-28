
const botaoTema = document.getElementById("tema");
const botaoMenu = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

const filtro = document.getElementById("filtro");
const projetos = document.querySelectorAll(".card");
const mensagem = document.getElementById("mensagemProjetos");

const voltarTopo = document.getElementById("voltarTopo");

// TROCAR O TEMA

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        botaoTema.textContent = "☾";
    } else {
        botaoTema.textContent = "☀";
    }

});

// ABRIR E FECHAR O MENU

botaoMenu.addEventListener("click", function() {

    menu.classList.toggle("ativo");

});

// FECHAR O MENU AO CLICAR EM UMA OPÇÃO

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("ativo");

    });

});

// FILTRAR OS PROJETOS

filtro.addEventListener("change", function() {

    let categoria = filtro.value;
    let quantidade = 0;

    projetos.forEach(function(projeto) {

        let tipo = projeto.dataset.tipo;

        if (categoria === "todos" || categoria === tipo) {

            projeto.style.display = "block";
            quantidade++;

        } else {

            projeto.style.display = "none";

        }

    });

    if (quantidade === 0) {

        mensagem.textContent = "Nenhum projeto encontrado.";

    } else {

        mensagem.textContent =
            quantidade + " projeto(s) encontrado(s).";

    }

});

// VOLTAR AO TOPO

voltarTopo.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});