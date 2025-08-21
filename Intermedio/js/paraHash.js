const porSHA=document.getElementById('sha');
porSHA.addEventListener("click",calcularHash);
function calcularHash() {
      const fileInput = document.getElementById("archivo");
      const file = fileInput.files[0];
      if (!file) {
        alert("Por favor selecciona un archivo");
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        // Convertimos el contenido a WordArray (formato de CryptoJS)
        const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
        
        // Generamos hash SHA-256
        const hash = CryptoJS.RIPEMD160(wordArray).toString(CryptoJS.enc.Hex);
        
        // Mostramos el resultado
        document.getElementById("hashsha").value = hash;
      };

      // Leemos el archivo como ArrayBuffer
      reader.readAsArrayBuffer(file);
}