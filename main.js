// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

// Example kata
// Filter the users array to show only the users with an eyeColor property of "green".
// const greenEyes1 = users.filter(user => user.eyeColor === "green")
// // OR...
// const greenEyes2 = users.filter(function (user) {
//     return user.eyeColor === "green"
// })
// main.append(greenEyes1)




// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.

const Kata1Heading = document.createElement('h1')
Kata1Heading.append('Kata 1')
main.append(Kata1Heading)

const trueIsActive = users.filter(users => users.isActive === true)
console.log(trueIsActive)
main.append(JSON.stringify(trueIsActive))



// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.

const Kata2Heading = document.createElement('h1')
Kata2Heading.append('Kata 2')
main.append(Kata2Heading)


const emails = users.map(user => user.email)
console.log(emails)
main.append(JSON.stringify(emails))



// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".

const Kata3Heading = document.createElement('h1')
Kata3Heading.append('Kata 3')
main.append(Kata3Heading)


const oneUsers = users.some(users => users.company === 'OVATION')
console.log(oneUsers)
main.append(JSON.stringify(oneUsers))


// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.

const Kata4Heading = document.createElement('h1')
Kata4Heading.append('Kata 4')
main.append(Kata4Heading)

const firstUsers = users.find(users => users.age > 38)
console.log(firstUsers)
main.append(JSON.stringify(firstUsers))




// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

const Kata5Heading = document.createElement('h1')
Kata5Heading.append('Kata 5')
main.append(Kata5Heading)

const firstActiveUsers = users.filter(users => users.age >38)
    .find(users => users.isActive === true)
console.log(firstActiveUsers)
main.append(JSON.stringify(firstActiveUsers))




// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

const Kata6Heading = document.createElement('h1')
Kata6Heading.append('Kata 6')
main.append(Kata6Heading)

const balances = users.filter(user => user.balance)
users.map(user => user.company='ZENCO')
console.log(balances)
main.append(JSON.stringify(balances))





// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

const Kata7Heading = document.createElement('h1')
Kata7Heading.append('Kata 7')
main.append(Kata7Heading)



const showAgeofUserswithFugiat = users.filter(users => users.tags).includes(['figiat'])
users.map(users=>users.age)
console.log(showAgeofUserswithFugiat)
main.append(JSON.stringify(showAgeofUserswithFugiat))



