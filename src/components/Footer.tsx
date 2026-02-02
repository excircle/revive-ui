export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="border-t-2 border-ti-fg py-6 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h3>Music</h3>
              <p className="text-base">Ensuring that music critisism is still written for, and read by, humans.</p>
            </div>
            <div>
              <h3>Writings</h3>
              <p className="text-base">Honoring the fact that, before it was co-opted by AI, Western English was once used to describe the universe for the sake of art.</p>
            </div>
            <div>
              <h3>Images</h3>
              <p className="text-base">Expressing human emotion through the beneficence of light.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-ti-bg-inv text-ti-fg-alt py-6 px-6">
        <div className="max-w-[1140px] mx-auto flex justify-between items-center">
          <p className="text-base">Copyright 2025 - Alexander Kalaj</p>
          <a href="/privacy" className="text-base no-underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
