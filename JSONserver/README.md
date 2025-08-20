 # 📘 React Router Notes
## 🔹 Route

- A Route defines the mapping between a URL path and the React component to render.

- Always used inside <Routes>.

- Syntax:
```jsx
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

- ✔ When user goes to /about, the <About /> component renders.

## 🔹 NavLink

- A special type of Link that can apply styles or classes when the link is active (i.e., when its path matches the current URL).

- It automatically adds an active class (or custom styling) to the link.

- Syntax:
```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
  About
</NavLink>
```

✔ Good for navigation menus where you want to highlight the current page.

### 🔹 Link vs NavLink
Feature	                Link                        NavLink
Navigation	            ✅ Yes	                ✅ Yes
Active class support	❌ No	                ✅ Yes (active)
Styling based on path	❌ Not possible	        ✅ Possible
Use case	            Simple navigation        Menus, sidebars, navbars

Example:
```js
<Link to="/home">Home</Link>
<NavLink to="/home">Home</NavLink>
```

- Both navigate to /home.

- But only NavLink highlights when active.