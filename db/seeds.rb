User.destroy_all
App.destroy_all
Feature.destroy_all

users = User.create([
  {
    name: "Vanessa Vengco"
  },
  {
    name: "TBONER"
  },
  {
    name: "Natheus"
  },
  {
    name: "Pizz Wizz"
  },
  {
    name: "Cheeky"
  },
  {
    name: "BonersWife"
  },
  {
    name: "MRGetup"
  }
])

apps = App.create([
  {
    title: "Boozsop",
    user: users[0]
  },
  {
    title: "Kadoosh",
    user: users[1]
  },
  {
    title: "Swindle",
    user: users[2]
  },
  {
    title: "MMMbop",
    user: users[3]
  },
  {
    title: "TakeMeHome",
    user: users[4]
  },
  {
    title: "Zuper",
    user: users[5]
  },
  {
    title: "Badonk",
    user: users[6]
  }
])

features = Feature.create([
  {
    title: "User can Sign Up",
    points: 3,
    app: apps[0],
    done: true
  },
  {
    title: "User can Sign In",
    points: 2,
    app: apps[0],
    done: true
  },
  {
    title: "User can blow a horn",
    points: 2,
    app: apps[0]
  },
  {
    title: "User can Sign Up",
    points: 3,
    app: apps[1],
    done: true
  },
  {
    title: "User can Sign in",
    points: 2,
    app: apps[1]
  },
  {
    title: "User can ride an elephant",
    points: 4,
    app: apps[1]
  },
  {
    title: "User can Sign Up",
    points: 3,
    app: apps[2]
  },
  {
    title: "User can Sign In",
    points: 1,
    app: apps[2]
  },
  {
    title: "User can catch a Star",
    points: 4,
    app: apps[2]
  },
  {
    title: "User can Sign Up",
    points: 3,
    app: apps[3],
    done: true
  },
  {
    title: "User can Sign In",
    points: 2,
    app: apps[3],
    done: true
  },
  {
    title: "User can do awesome stuff",
    points: 4,
    app: apps[3],
    done: true
  },
  {
    title: "User can Sign Up",
    points: 3,
    app: apps[4],
    done: true
  },
  {
    title: "User can grow a giant beanstalk",
    points: 4,
    app: apps[4]
  },
  {
    title: "User can Sign In",
    points: 2,
    app: apps[4]
  },
  {
    title: "User can Sign Up",
    points: 4,
    app: apps[5],
    done: true
  },
  {
    title: "User can Sign In",
    points: 4,
    app: apps[5],
    done: true
  },
  {
    title: "User can buy a kite",
    points: 4,
    app: apps[5]
  },
  {
    title: "User can Sign Up",
    points: 4,
    app: apps[6],
    done: true
  },
  {
    title: "User can Sign In",
    points: 4,
    app: apps[6]
  },
  {
    title: "User can et phone home",
    points: 4,
    app: apps[6]
  },
  {
    title: "User can fly into the sun",
    points: 4,
    app: apps[6]
  }
])
