  document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('calc-form');
  const resultDiv=document.getElementById('resultado');
  const graficaContainer=document.getElementById('grafica-container');
  const ctx=document.getElementById('grafica');
  let debounceTimer;

  function calcular(){
    const area=parseFloat(document.getElementById('area').value);
    const lluvia=parseFloat(document.getElementById('lluvia').value);
    const coef=parseFloat(document.getElementById('material').value);
    const matText=document.getElementById('material').selectedOptions[0].text;

    if(isNaN(area)||isNaN(lluvia)||area<=0||lluvia<=0){
      mostrarError("Por favor ingresa valores válidos.");
      return;
    }

    resultDiv.innerHTML="<p>Calculando...</p>";
    resultDiv.style.display="block";

    setTimeout(()=>{
      const litros=area*lluvia*coef;
      const tinacos=litros/1100;
      const duchas=litros/50;
      const arboles=litros/200;
      const ahorro=litros*0.015;
      const inversion=6000;
      const roi=(ahorro/inversion*100).toFixed(1);

      graficaContainer.style.display="block";
      resultDiv.innerHTML=`
      <h2>RESULTADOS</h2>
      <ul>
      <li><strong>${litros.toLocaleString()}</strong> litros de agua captada al año</li>
      <li>${tinacos.toFixed(0)} tinacos llenos</li>
      <li>${duchas.toFixed(0)} duchas completas</li>
      <li>${arboles.toFixed(0)} árboles regados</li>
      <li>Ahorro anual: <strong>$${ahorro.toFixed(0)} MXN</strong></li>
      <li>Retorno de inversión: ${roi}%</li>
      </ul>`;
      new Chart(ctx,{type:'bar',data:{labels:['Litros','Tinacos','Duchas','Árboles'],datasets:[{data:[litros,tinacos,duchas,arboles],backgroundColor:['#8cd1f7','#a8d8f0','#bfe6ff','#d9f3ff']}]}});
    },800);
  }

  function mostrarError(msg){
    resultDiv.style.display="block";
    resultDiv.innerHTML=`<h3>Error</h3><p>${msg}</p>`;
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    clearTimeout(debounceTimer);
    debounceTimer=setTimeout(calcular,400);
  });
});
