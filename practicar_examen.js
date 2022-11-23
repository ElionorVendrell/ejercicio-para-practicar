const amigos = [
  {
    id: 1,
    name: "Elena",
    age: 28,
    master: true,
    work: true,
    idiomas: ["ingles", "frances", "castellano", "catalan"],
    size: { altura: 160, peso: 65 },
  },
  {
    id: 2,
    name: "Santi",
    age: 29,
    master: false,
    work: true,
    idiomas: ["castellano", "catalan"],
    size: { altura: 165, peso: 60 },
  },
  {
    id: 3,
    name: "Aguadé",
    age: 30,
    master: false,
    work: false,
    idiomas: ["ingles", "castellano", "catalan"],
    size: { altura: 180, peso: 75 },
  },
  {
    id: 4,
    name: "Monica",
    age: 29,
    master: true,
    work: false,
    idiomas: ["italiano", "ingles", "frances", "castellano", "catalan"],
    size: { altura: 180, peso: 70 },
  },
  {
    id: 5,
    name: "Diana",
    age: 27,
    master: true,
    work: true,
    idiomas: ["ingles", "castellano", "catalan"],
    size: { altura: 157, peso: 55 },
  },
  {
    id: 6,
    name: "Nody",
    age: 28,
    master: true,
    work: true,
    idiomas: ["ingles", "frances", "castellano", "catalan", "italiano"],
    size: { altura: 156, peso: 50 },
  },
  {
    id: 7,
    name: "Carla",
    age: 28,
    master: false,
    work: true,
    idiomas: ["ingles", "castellano", "catalan"],
    size: { altura: 175, peso: 65 },
  },
  {
    id: 8,
    name: "Maria",
    age: 26,
    master: false,
    work: true,
    idiomas: ["ingles", "castellano", "catalan"],
    size: { altura: 165, peso: 60 },
  },
];

console.log(amigos);

//1. Retornar nombres amigos
const nombres = amigos.map((nombre) => nombre.name);
console.log("Nombres de los amigos: " + nombres);

//2. Retornar los amigos que hablen frances
const frances = amigos.filter((amigo) => amigo.idiomas.includes("frances"));
console.log(frances);
const nombresFrances = frances.map((nombres) => nombres.name);
console.log("Nombres de los amigos que hablan francés: " + nombresFrances);

//3. Mediana edades(sin decimales)
const suma = amigos.reduce((a, b) => a + b.age, 0);
console.log(suma);
const mediana = suma / amigos.length;
console.log(
  `Mediana de las edades de los amigos: ${Number(mediana).toFixed(0)} años`
);

//4. Mediana altura
const sumaAltura = amigos.reduce((a, b) => a + b.size.altura, 0);
console.log(sumaAltura);
const medianaAltura = sumaAltura / amigos.length;
console.log(`Mediana de la altura de los amigos: ${medianaAltura}cm`);

//5. Número amigos que tienen master
const master = amigos.filter((amigo) => amigo.master === true);
console.log(`Número de amigos que tienen master: ${master.length}`);

//6. Número amigos que no trabajan
const noWork = amigos.filter((amigo) => amigo.work === false);
console.log(`Número amigos que no trabajan: ${noWork.length}`);

//7. Ordenar amigos por orden alf
const amigosOrdenados = amigos.map((amigo) => amigo.name);
console.log(
  `listado de amigos por orden alfabetico: ${amigosOrdenados.sort()}`
);

//8. Ordenar amigos por edades
const ordenEdades = amigos.sort((a, b) => a.age - b.age);
console.log(ordenEdades);

//9. Todos los idiomas que se hablan
const todosIdiomas = amigos.map((amigo) => amigo.idiomas);
//----> con el flat creo un array con todos los idiomas
const totalIdiomas = todosIdiomas.flat();
//----> aquí se devuelven todos los idiomas repetidos (un total de 28)
console.log(totalIdiomas);
//----> creamos un nuevo array con los elementos sin repetir:
const idiomasSinDuplicados = [...new Set(totalIdiomas)];
console.log(`todos los idiomas que se hablan son: ${idiomasSinDuplicados}`);

//10. Retorna el idioma más hablado
const idiomas = amigos.map((amigo) => amigo.idiomas).flat();
console.log(idiomas);
const langContador = {};
idiomas.forEach((idioma) => {
  let currentLang = Object.keys(langContador);
  if (currentLang.includes(idioma)) {
    langContador[idioma] += 1;
  } else {
    langContador[idioma] = 1;
  }
});
console.log(langContador);
let mayor = 0;

//---> Hay que recorrer el objeto langContador para ver que valor es mayor

/* langContador.forEach((idioma) => {
  if (Object.values(idioma) > mayor) {
    mayor = idioma;
  }
}); */

for (lang in langContador) {
  if (lang > mayor) {
    mayor = lang;
  }
}
console.log("Es este--->>", mayor);

//11. Retornar todos los amigos más altos de 160cm
const amigosAltos = amigos.filter((amigo) => amigo.size.altura >= 160);
//----> Nos devuelve todo el objeto
console.log(amigosAltos);
//---> queremos que nos devuelva el nombre de los amigos más altos de 160cm
const nombresAltos = amigosAltos.map((nombre) => nombre.name);
console.log(`Los amigos más altos de 160cm son: ${nombresAltos}`);

//12. Eliminar Nody del array amigos
//---> busco la posición que ocupa "Nody" y lo guardo en una variable
const indexNody = amigos.findIndex((e) => e.name === "Nody");
console.log(indexNody);
//---> busco dentro del array la posición que hemos encontrado antes, me situo y elimino 1 elemento
amigos.splice(indexNody, 1);
console.log(amigos);

//13. Eliminar un amigo
//---> pop(); elimina el último elemento
//---> shift(); elimina el primer elemento
//---> splice(1); elimina elemento de una posición específica
//---> splice(1,4); también elimina elementos a partir de una posición a otra
amigos.pop();
console.log(amigos);

//14. Añadir trabajo a Monica
const peni = amigos.find((amigo) => amigo.name === "Monica");
console.log(peni);
peni.work = true;
console.log(peni);
console.log(amigos);

//15. Añadir master a Santi y retornar todo el array amigos
const fajardo = amigos.find((amigo) => amigo.name === "Santi");
fajardo.master = true;
console.log(fajardo);
console.log(amigos);

//16. Eliminar key trabajo a Carla
const carlins = amigos.find((amigo) => amigo.name === "Carla");
delete carlins.work;
console.log(amigos);

//17. Añadir ingles a Santi
const ferny = amigos.find((amigo) => amigo.name === "Santi");
ferny.idiomas.push("ingles");
console.log(ferny);

//18. Crear nuevo amigo (clases herencia)

class Amigo {
  constructor(id, name, age, master, work, idiomas, size) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._master = master;
    this._work = work;
    this._idiomas = idiomas;
    this._size = size;
  }
  get getId() {
    return this._id;
  }
  set setId(i) {
    this._id = i;
  }
  get getName() {
    return this._name;
  }
  set setName(n) {
    this._name = n;
  }
  get getAge() {
    return this._age;
  }
  set setAge(a) {
    this._age = a;
  }
  get getMaser() {
    return this._master;
  }
  set setMaster(m) {
    this._master = m;
  }
  get getWork() {
    return this._work;
  }
  set setWork(w) {
    this._work = w;
  }
  get getIdiomas() {
    return this._idiomas;
  }
  set setIdiomas(d) {
    this._idiomas = d;
  }
  get getSize() {
    return this._size;
  }
  set setSize(s) {
    this._size = s;
  }
}

const aitor = new Amigo(
  "7",
  "Aitor",
  "30",
  true,
  true,
  ["ingles", "català", "castellà"],
  { altura: 170, peso: 70 }
);
console.log(aitor);
let nuevoAmigo = JSON.parse(JSON.stringify(aitor));
amigos.push(nuevoAmigo);
console.log(amigos);

//14.Eliminar un idioma al nuevo amigo creado
const albarracin = amigos.find((amigo) => amigo._name === "Aitor");
//---> buscar el Index del elemento ingles en el array, para eliminarlo

albarracin._idiomas.splice(0, 1);
console.log(albarracin);

// 15.Crear la clase familia que venga de amigo y que tenga la key parentesco
class Familia extends Amigo {
  constructor(id, name, age, master, work, idiomas, size, parentesco) {
    super(id, name, age, master, work, idiomas, size);
    this._parentesco = parentesco;
  }
  get getParentesco() {
    return this._parentesco;
  }
  set setParentesco(p) {
    this._parentesco = p;
  }
}

// 16. Crear un germà amb la clase Familia
const enric = new Familia(
  "8",
  "Enric",
  "33",
  true,
  true,
  ["ingles", "català", "castellà", "italià", "francés"],
  { altura: 168, peso: 72 },
  "germà"
);
console.log(enric);
let obj = JSON.parse(JSON.stringify(enric));

amigos.push(obj);
console.log(amigos);
