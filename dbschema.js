//Structure of database collection 

let db = {
  users: [
    {
      userId: 'ziK3GMRlazgkeZho707Rhiehkmv1',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2020-04-18T21:17:41.452Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'I am the fist user',
      website: 'https://google.com',
      location: 'India'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'This is a sample scream',
      createdAt: '',
      likeCount: ,
      commentCount: 
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: '',
      body: '',
      createdAt: ''
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: '',
      read: 'true | false',
      screamId: '',
      type: 'like | comment',
      createdAt: ''
    }
  ]
};
const userDetails = {
  // Redux data
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: '',
    website: 'https://google.com',
    location: 'India'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh7O5oWfWucVzGbHH2pa'
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO'
    }
  ]
};
