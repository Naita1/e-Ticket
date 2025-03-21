function comprar() { 
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);
  
    comprarIngresso(tipo, qtd);
  }
  
  function comprarIngresso(tipo, qtd) {
    let estoqueElemento = document.getElementById(`qtd-${tipo}`);
    let qtdDisponivel = parseInt(estoqueElemento.textContent);
  
    if (qtd > qtdDisponivel) {
      alert(`Quantidade indisponível para o tipo ${tipo}`);
    } else {
      estoqueElemento.textContent = qtdDisponivel - qtd;
      alert("Compra realizada");
    }
  }
  