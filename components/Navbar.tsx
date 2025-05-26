export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>Logo</div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About Me</li>
        <li>My Works</li>
        <li>CTA</li>
      </ul>
    </nav>
  );
}
