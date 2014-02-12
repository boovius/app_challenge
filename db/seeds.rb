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
