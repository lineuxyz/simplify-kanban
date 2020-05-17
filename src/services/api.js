export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#84c870'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Criar um clone do spotify',
          labels: ['#84c870'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Estudar React Native',
          labels: ['#84c870'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Estudar metodologia agil',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Estudar adonis',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Criar o simplify',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Consumir API publica do github',
          labels: ['#84c870'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Fazer deploy React Native',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Estudar sobre algoritimo',
          labels: ['#e55e4e'],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Criar um clone da netflix',
          labels: ['#84c870'],
        },
        {
          id: 12,
          content: 'Terminar projetos em andamento',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Fazer live na twitch',
          labels: ['#84c870'],
        }
      ]
    },
  ];
}