var services = [
  {
    name: 'immigration',
    persons: ['immigrant', 'sdf'],

  },
  {
    name: 'transport',
    persons: ['elderly', 'student'],
  },
  {
    name: 'government',
    persons: ['resident', 'elderly'],
  },
  {
    name: 'health',
    persons: ['elderly'],
  },
  {
    name: 'benefits',
    persons: ['elderly', 'disabled'],
    url: 'health'
  },
  {
    name: 'work',
    persons: ['resident', 'married'],
    url: 'work url'
  }
]

function getServices(person) {
  var found = []
  for (var i = 0; i < services.length; i++) {
    if (person.some(r => services[i].persons.includes(r))) {
      found.push(services[i].name)
    }
  }
  return found
}

var personConstraints = ['elderly', 'parent', 'resident', 'disabled', 'unemployed'];

console.log(getServices(personConstraints));