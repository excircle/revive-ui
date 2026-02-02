export default function Header() {
  return (
    <header className="border-b-2 border-ti-fg">
      <div className="max-w-[1140px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Site Title */}
          <h4 className="text-[28px] uppercase">
            <a href="/" className="no-underline">
              REVIVE | (!)
            </a>
          </h4>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-8">
              <li><a href="/music" className="uppercase no-underline">Music</a></li>
              <li><a href="/writings" className="uppercase no-underline">Writing</a></li>
              <li><a href="/images" className="uppercase no-underline">Image</a></li>
              <li><a href="/images" className="uppercase no-underline">Film</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
