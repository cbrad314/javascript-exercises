const findTheOldest = function(people) {
    return people.reduce((oldestPerson,person,i) => 
    {
    const personAge = !person.yearOfDeath ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    const oldestPersonAge = !oldestPerson.yearOfDeath ? new Date().getFullYear() - oldestPerson.yearOfBirth : oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    return (personAge >= oldestPersonAge) ? person: oldestPerson;
    }
    )
};

// Do not edit below this line
module.exports = findTheOldest;
