const frutas = [
    'guayaba',
    'fresa',
    'mango ataulfo',
    'aguacate',
    'mamey',
    'cacao',
    'piña',
    'plátano',
    'agave',
    'capulín',
    'chicozapote',
    'zapote negro',
    'xoconostle',
    'tejocote',
    'jícama',
    'papaya',
    'guanábana',
    'pitahaya'
  ];
  
  const acidas = ['piña', 'capulín', 'xoconostle', 'tejocote'];
  const semiacidas = ['fresa', 'pitahaya'];
  const neutras = ['aguacate', 'cacao', 'jícama'];
  const dulces = ['guayaba', 'mango ataulfo', 'mamey', 'plátano', 'agave', 'chicozapote', 'zapote negro', 'papaya', 'guanábana'];
  
  let contador = {
    acidas: 0,
    semiacidas: 0,
    neutras: 0,
    dulces: 0
  };
  
  for (fruta of frutas) {
    if (acidas.includes(fruta)) {
      contador.acidas++;
    } else if (semiacidas.includes(fruta)) {
      contador.semiacidas++;
    } else if (neutras.includes(fruta)) {
      contador.neutras++;
    } else if (dulces.includes(fruta)) {
      contador.dulces++;
    }
  }
  
  console.log("Frutas ácidas: " + contador.acidas);
  console.log("Frutas semiácidas: " + contador.semiacidas);
  console.log("Frutas neutras: " + contador.neutras);
  console.log("Frutas dulces: " + contador.dulces);
  