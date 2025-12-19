import { useState } from 'react'
import './App.css'

const icons = {
  search: "M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z",
  location: "M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z",
  twitter: "M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z",
  link: "M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z",
  building: "M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"
}

const defaultProfile = {
  avatar: "https://github.com/octocat.png",
  name: "The Octocat",
  username: "@octocat",
  bio: "This profile has no bio.",
  joined: "Joined Jan 26 2011",
  repos: 8,
  followers: 21040,
  following: 9,
  location: "San Francisco",
  twitter: "Not Available",
  blog: "https://github.blog",
  company: "@github"
}

export default function App() {
  const [profile, setProfile] = useState(defaultProfile)
  const [search, setSearch] = useState("")

  const fetchUser = async () => {
    if (!search.trim()) {
      alert("Enter a GitHub username")
      return
    }

    try {
      const res = await fetch(`https://api.github.com/users/${search}`)
      if (!res.ok) throw new Error("User not found")
      const data = await res.json()
      setProfile({
        avatar: data.avatar_url,
        name: data.name || data.login,
        username: "@" + data.login,
        bio: data.bio || "This profile has no bio.",
        joined: "Joined " + new Date(data.created_at).toDateString(),
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location || "Not Available",
        twitter: data.twitter_username || "Not Available",
        blog: data.blog || "Not Available",
        company: data.company || "Not Available"
      })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>DevFinder</h1>
      </header>

      <div className="search-box">
        <div className="icon">
          <svg viewBox="0 0 20 20">
            <path d={icons.search}></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>

      <div className="profile-card">
        <img className="avatar" src={profile.avatar} alt="Profile" />
        <div className="profile-header">
          <div className="top-row">
            <div>
              <h2>{profile.name}</h2>
              <p className="username">{profile.username}</p>
            </div>
            <p className="joined">{profile.joined}</p>
          </div>
          <p className="bio">{profile.bio}</p>
        </div>

        <div className="stats-box">
          <div>
            <p className="label">Repos</p>
            <p className="value">{profile.repos}</p>
          </div>
          <div>
            <p className="label">Followers</p>
            <p className="value">{profile.followers}</p>
          </div>
          <div>
            <p className="label">Following</p>
            <p className="value">{profile.following}</p>
          </div>
        </div>

        <div className="info-section">
          <div className="info-item">
            <div className="icon">
              <svg viewBox="0 0 20 20">
                <path d={icons.location}></path>
              </svg>
            </div>
            <span>{profile.location}</span>
          </div>
          <div className="info-item">
            <div className="icon">
              <svg viewBox="0 0 20 20">
                <path d={icons.twitter}></path>
              </svg>
            </div>
            <span>{profile.twitter}</span>
          </div>
          <div className="info-item">
            <div className="icon">
              <svg viewBox="0 0 20 20">
                <path d={icons.link}></path>
              </svg>
            </div>
            <a href={profile.blog} target="_blank" rel="noreferrer">{profile.blog}</a>
          </div>
          <div className="info-item">
            <div className="icon">
              <svg viewBox="0 0 20 20">
                <path d={icons.building}></path>
              </svg>
            </div>
            <span>{profile.company}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
