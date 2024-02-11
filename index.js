require('dotenv').config()

const express = require('express')

const app = express()

const port = 5000

const githubData = {
    "login": "kanishkmunot",
    "id": 128204622,
    "node_id": "U_kgDOB6Q_Tg",
    "avatar_url": "https://avatars.githubusercontent.com/u/128204622?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kanishkmunot",
    "html_url": "https://github.com/kanishkmunot",
    "followers_url": "https://api.github.com/users/kanishkmunot/followers",
    "following_url": "https://api.github.com/users/kanishkmunot/following{/other_user}",
    "gists_url": "https://api.github.com/users/kanishkmunot/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kanishkmunot/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kanishkmunot/subscriptions",
    "organizations_url": "https://api.github.com/users/kanishkmunot/orgs",
    "repos_url": "https://api.github.com/users/kanishkmunot/repos",
    "events_url": "https://api.github.com/users/kanishkmunot/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kanishkmunot/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 64,
    "public_gists": 0,
    "followers": 3,
    "following": 2,
    "created_at": "2023-03-18T04:11:53Z",
    "updated_at": "2024-02-11T14:30:17Z"
  }
app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.get('/kenny', (req, res) => {
    res.send('Howdy!')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})