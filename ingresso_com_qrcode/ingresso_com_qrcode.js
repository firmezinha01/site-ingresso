  // Dados do ingresso que vão ser codificados no QR Code
    const nome = "João da Silva";  // Substitua pelos dados reais
    const dataEvento = "14/07/2025";
    const local = "Guarulhos - SP";
    const preco = "R$ 200,00";
    
    // Monta a string que será codificada no QR Code
    const qrData = `Ingresso com Qr Code\nNome: ${nome}\nData: ${dataEvento}\nLocal: ${local}\nPreço: ${preco}`;

    // Gera o QR Code no canvas dentro do elemento #qrcode
    QRCode.toCanvas(document.getElementById('qrcode'), qrData, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.log('QR Code gerado com sucesso!');
      }
    });