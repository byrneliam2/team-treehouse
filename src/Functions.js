var services = [
  {
    name: 'immigration',
    persons: ['immigrant', 'sdf'],
    url: 'immigration url'
  },
  {
    name: 'transport',
    persons: ['elderly', 'student'],
    url: 'transport url'
  },
  {
    name: 'work',
    persons: ['resident', 'married'],
    url: 'work url'
  }
]

function getService(person) {
  var fond = [];
  for (var i = 0; i < services.length; i++) {
    for (var j = 0; j < person.length; j++) {
      if(person[j] == services[i].persons){
        fond.push(services[i].name);
      }
    }
  }
  console.log(fond);
}

var personConstraints = ['elderly', 'married'];

getService(personConstraints)
