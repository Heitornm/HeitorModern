import { smoothScrollTo } from "@/lib/smooth-scroll"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text block">Heitor Martins</span>
            </h1>
            <p className="text-2xl mb-8 font-semibold text-slate-200">
              Desenvolvedor Web e Mobile
            </p>
            <p id="paragrafoColado" className="text-xl text-slate-400 mb-8 max-w-lg">
              Transformando ideias complexas em código limpo, eficiente e escalável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => smoothScrollTo("#contact")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => smoothScrollTo("#about")}
                className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center font-medium"
              >
                Saiba Mais
              </button>
            </div>

            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/heitornm" aria-label="GitHub" className="text-2xl text-slate-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/heitornm" aria-label="LinkedIn" className="text-2xl text-slate-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/5511980170584" aria-label="WhatsApp" className="text-2xl text-slate-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="animate-fade-in hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6 text-slate-100">Tecnologias</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-html5 text-3xl text-orange-500 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">HTML5</p>
                  </div>
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-css3-alt text-3xl text-blue-500 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">CSS3</p>
                  </div>
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-js-square text-3xl text-yellow-500 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">JavaScript</p>
                  </div>
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-react text-3xl text-blue-400 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">React</p>
                  </div>
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-node-js text-3xl text-green-500 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">Node.js</p>
                  </div>
                  <div className="skill-glow bg-slate-900/60 p-4 rounded-xl text-center shadow-md border border-slate-700/30 transition duration-300">
                    <i className="fab fa-python text-3xl text-blue-600 mb-2"></i>
                    <p className="text-sm font-medium text-slate-300">Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}