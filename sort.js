let fruits = [
    "Apple", "Apricot", "Avocado", "Asian Pear", "Almond Fruit",
    "Banana", "Blackberry", "Blueberry", "Blood Orange", "Breadfruit",
    "Cherry", "Cranberry", "Cantaloupe", "Custard Apple", "Currant",
    "Date", "Dragonfruit", "Durian", "Duku", "Desert Lime",
    "Fig", "Finger Lime", "Feijoa", "Forest Strawberry", "Flat Peach",
    "Grapes", "Guava", "Gooseberry", "Golden Apple", "Galia Melon",
    "Kiwi", "Kumquat", "Kaffir Lime", "Kiwano", "Korean Melon",
    "Mango", "Mangosteen", "Mandarin", "Mulberry", "Melon",
    "Orange", "Olive", "Orangelo", "Otaheite Apple", "Ogen Melon",
    "Pineapple", "Papaya", "Passionfruit", "Persimmon", "Pomelo"
  ];
 const filterData=fruits.filter(data=>data.startsWith("A"));
 console.log(filterData.sort());