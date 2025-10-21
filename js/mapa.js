const map=L.map('map',{scrollWheelZoom:false}).setView([19.284,-99.738],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);

const zonas=[
  {nombre:"Zona Centro",coords:[[19.282,-99.74],[19.287,-99.74],[19.287,-99.732],[19.282,-99.732]],color:"green",tooltip:"Precipitación: 850 mm/año<br>Escasez: Baja"},
  {nombre:"Zona Norte",coords:[[19.29,-99.75],[19.295,-99.75],[19.295,-99.74],[19.29,-99.74]],color:"orange",tooltip:"Precipitación: 700 mm/año<br>Escasez: Media"}
];
zonas.forEach(z=>{
  const zona=L.polygon(z.coords,{color:z.color,fillOpacity:0.5}).addTo(map);
  zona.bindTooltip(`<b>${z.nombre}</b><br>${z.tooltip}`);
});
const legend=L.control({position:"bottomright"});
legend.onAdd=()=>{
  const div=L.DomUtil.create("div","legend");
  div.innerHTML="<b>Leyenda:</b><br><span style='color:green;'>■</span> Baja escasez<br><span style='color:orange;'>■</span> Media escasez";
  return div;
};
legend.addTo(map);
