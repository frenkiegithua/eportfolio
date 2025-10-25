import { Link } from 'react-router-dom';

export default function Navigation() {
  const handleLogoClick = () => {
    window.location.href = '/'; // Navigate to home
  };

  return (
    <nav className="flex items-center justify-between p-3 bg-gradient-to-r from-white to-[#f3f7fb] shadow-lg rounded-lg gap-4 font-sans">
      <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg shadow-md">
          EP
        </div>
        <div>
          <div className="font-bold text-lg text-[#0f172a]">ePortfolio</div>
          <div className="text-sm text-[#475569]">Showcase work & resume</div>
        </div>
      </div>

      <ul className="flex gap-3 list-none m-0 p-0 items-center">
        {["About", "Projects"].map((item, i) => (
          <li key={item}>
            <Link
              to={item === "Projects" ? "/artifacts" : `/${item.toLowerCase()}`}
              className={`inline-block px-3 py-2 ${i === 0 ? "text-[#0f172a] bg-[#f3f7fb] rounded-lg" : "text-[#334155]"} rounded-lg text-sm font-semibold`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <input
          aria-label="Search"
          placeholder="Search projects..."
          className="px-3 py-2 rounded-lg border border-[#e6eef8] bg-white outline-none text-sm text-[#0f172a] w-44 shadow-inner"
        />
        <div className="flex items-center gap-3">
          <div
            title="Profile"
            className="w-9 h-9 rounded-full bg-gradient-to-b from-[#c7f9fb] to-[#60a5fa] flex items-center justify-center font-bold text-[#083344] text-sm shadow-lg"
          >
            J
          </div>
        </div>
      </div>
    </nav>
  );
}


