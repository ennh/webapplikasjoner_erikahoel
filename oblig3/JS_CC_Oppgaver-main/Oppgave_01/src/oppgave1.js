const tekst =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const lengsteOrd = () => {

  // Her gjør jeg om variabelen tekst til en Array, som ["Baby", "cliche"] osv..
  const tekstArray = tekst.split(" ");
  // Her setter jeg det første ordet (0 = det første) til å være det lengste ordet, slik at vi har noe å sammenlike med i loopen under
  let lengsteOrd = tekstArray[0];
  /* Her looper jeg over alle ordene. Da sjekker den om de neste ordene er lengre enn nåværende ord, altså det første ordet.
  Hvis det er et ord som er lengre, oppdateres det til det lengste ordet */
  tekstArray.forEach((ord) => {
    if (ord.length > lengsteOrd.length) {
      lengsteOrd = ord;
    }
  });

  return lengsteOrd;
  
};

// Skriver ut i konsollen
console.log(lengsteOrd());
