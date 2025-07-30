import Navbar from '../components/Navbar';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <Navbar />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Big Text */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let’s <span className="text-purple-500">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Feel free to reach out through any platform below.
          </p>
        </div>

        {/* Right Side - Info Box */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Wanna Meet me, Let's Meet</h2>
          <ul className="space-y-3">
            <li>
              <span className="font-medium">Facebook:</span>{' '}
              <a
                href="https://facebook.com/your_facebook_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @Vishal Pachhai Chhetri
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{' '}
              <a
                href="mailto:your@email.com"
                className="text-blue-600 hover:underline"
              >
                bishalportfolio@email.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{' '}
              <a
                href="tel:+9779812345678"
                className="text-blue-600 hover:underline"
              >
                +977 9812345678
              </a>
            </li>
            <li>
              <span className="font-medium">Instagram:</span>{' '}
              <a
                href="https://instagram.com/your_instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @itsyourboybishalhere
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

  