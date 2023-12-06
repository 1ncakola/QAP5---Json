// Use Fetch API to read JSON file
fetch('data.json')
.then(response => response.json())
.then(dataArray => {
  // Iterate through the array using forEach
  dataArray.forEach(record => {
    console.log(`ID: ${record.id}, Name: ${record.name}, Age: ${record.age}`);
  });
})
.catch(error => console.error('Error:', error));

   