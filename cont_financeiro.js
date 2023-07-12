let quantiaAtual = prompt("Qual a quantia inicial de dinheiro disponível?");
quantiaAtual = parseFloat(quantiaAtual);
opcao = "";
do {
  opcao = prompt(
    "Quatidade atual = " +
      quantiaAtual +
      "\nSelecione as opções abaixo" +
      "\n1. Somar" +
      "\n2. Subtrair" +
      "\n3. Encerrar"
  );
  switch (opcao) {
    case "1":
      quantiaAtual += parseFloat(prompt("Qual valor deseja somar?"));
      break;

    case "2":
      quantiaAtual -= prompt("Qual valor deseja subtrair");
      break;

    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (opcao !== "3");
