export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Home
      </a>
      <ul>
        <CustomLink href={"/pricing"}>Pricing</CustomLink>
        <CustomLink href={"/about"}>About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
