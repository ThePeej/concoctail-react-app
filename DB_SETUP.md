To populate Rails API database:
(via Chrome Console)

let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

let drinks = fetch(url).then(response=>response.json()).then(data=> drinks = data.drinks)

let drinkIds = drinks.map(drink => drink.idDrink)


(iterate through IDs and fetch JSON from =>
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060

console.log(JSON.stringify(uniqueNames))

uniqueNames.join("\",\"")


then iterate through array and assign to each component



let drinkIds = [14029,15395,15423,14588,15346,17060,15288,13899,15300,13581,14598,17105,13940,14229,16108,15200,11000,16943,15675,11001,16405,14564,17005,11002,14560,17222,11003,17223,13501,11004,12790,14374,14372,14360,15597,14107,15024,17224,16134,11005,17225,14610,11006,17226,16333,15567,17227,17228,14272,17229,11007,11008,11009,11010,13807,15182,11011,13162,11012,11013,11014,11019,11020,17094,11021,11022,11023,16082,11024,11025,12792,11026,11027,15194,13731,11028,14306,16100,14578,17168,16202,11029,15941,11034,12794,16289,16958,13683,11046,16311,11050,15849,11052,14622,17118,11053,16354,14584,17074,17066,11054,11055,12870,13938,13423,13086,17020,12756,16419,15266,17180,14364,15853,13332,15511,17079,17183,17267,14510,11060,11064,17209,14071,17195,16176,11084,12876,17184,16986,13222,17254,13282,16403,15951,11102,11106,16295,14356,11112,11113,17268,11117,11118,11119,11120,13395,11121,17242,11124,17221,11128,11129,17251,11146,11147,11149,17120,13405,17210,16447,11016,11157,11164,11170,13068,17825,13066,16998,14730,17035,14538,17220,14181,11202,13206,11205,14282,16047,17065,12796,11222,17185,11224,11227,11239,11242,11243,13328,17135,11251,11145,11255,17186,12798,12800,17250,17196,14133,12802,14608,12808,13751,11288,11291,13194,15409,17211,17177,14482,17187,13128,17181,14466,16991,11320,11324,11326,17182,17246,11338,11339,17212,13070,13202,16485,13675,11368,11369,11375,14688,11379,17197,17198,17213,17248,11382,11387,11390,11391,15743,12758,11396,17002,17255,11403,11407,11408,11410,17230,11415]

let drinkCollection = []

function fetchDrink(id){
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(response=> response.json()).then(data => drinkCollection.push(data.drinks[0]))
}

drinkIds.forEach(id => { fetchDrink(id)})

drinkCollection


function filterDrink(drink){
  Object.keys(drink).forEach(key=> {
    if (drink[key] === "" || drink[key] === " " || drink[key] === null || drink[key] === '\n' || drink[key] === '\r\n') {
      delete drink[key]
    } else if (key === 'dateModified' || key === 'idDrink' || key === 'strAlcoholic' ) {
      delete drink[key]
    }
  })
  return drink
}


drinks.forEach(drink=>{filterDrink(drink)})
Object.keys(myObj).forEach((key) => (myObj[key] == null) && delete myObj[key]);

console.log(JSON.stringify(drinks))




