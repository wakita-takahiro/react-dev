import { NavLink } from "react-router-dom"; // 追加

export const Footer = () => {
  return (
    <ul>
      <li>
        <NavLink style={({ active }) => (active ? { color: 'red' } : undefined)} to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink style={({ active }) => (active ? { color: 'red' } : undefined)} to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink style={({ active }) => (active ? { color: 'red' } : undefined)} to="/contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink style={({ active }) => (active ? { color: 'red' } : undefined)} to="/posts">POSTS</NavLink>
      </li>
    </ul>
  )
}