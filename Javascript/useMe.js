function fetchUsers(callback) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        callback(null, data); // Call the callback with the data
      })
      .catch(error => {
        callback(error, null); // Call the callback with the error
      });
  }
  
  // Example usage:
  fetchUsers((error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
  