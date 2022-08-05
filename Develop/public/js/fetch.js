async function getData(url) {
    const fetchData = await fetch(`/api/${url}/`, {});
    const dataReturn = await fetchData.json();
    return dataReturn;
  }
  
  //getting all users
  getData(`users`)
    .then((data) => console.log(`Users:`, data))
    .catch((err) => console.log(err));
  //getting all rooms
  getData(`posts`)
    .then((data) => console.log(`Posts:`, data))
    .catch((err) => console.log(err));
  //getting all words
  // getData(`api/words/`)
  //   .then((data) => console.log(`words`, data))
  //   .catch((err) => console.log(err));
  