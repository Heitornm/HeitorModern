import { smoothScrollTo } from "@/lib/smooth-scroll"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text block">Heitor Martins</span>
            </h2>
            <p className="text-2xl mb-8 font-semibold text-gray-800 dark:text-slate-200">
              Desenvolvedor Web e Mobile 
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Ajudando a inserir empresas no mundo digital, uma linha de código por vez.
            </p>
            <br></br>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => smoothScrollTo("#contact")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => smoothScrollTo("#about")}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                Saiba Mais
              </button>
            </div>

            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/heitornm" className="text-2xl hover:text-blue-600 transition-colors" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/heitor-nascimento-martins-2b2a33326/" className="text-2xl hover:text-blue-600 transition-colors" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/5511980170584" className="text-2xl hover:text-blue-600 transition-colors" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="animate-fade-in hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Tecnologias</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-html5 text-3xl text-orange-500 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">HTML5</p>
                  </div>
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-css3-alt text-3xl text-blue-500 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">CSS3</p>
                  </div>
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-js-square text-3xl text-yellow-500 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">JavaScript</p>
                  </div>
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-react text-3xl text-blue-400 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">React</p>
                  </div>
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-node-js text-3xl text-green-500 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">Node.js</p>
                  </div>
                  <div className="skill-glow bg-white p-4 rounded-xl text-center shadow-sm transition duration-300">
                    <i className="fab fa-python text-3xl text-blue-600 mb-2"></i>
                    <p className="text-sm font-medium text-gray-700">Python</p>
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
