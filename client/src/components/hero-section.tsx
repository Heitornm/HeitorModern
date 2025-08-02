import { smoothScrollTo } from "@/lib/smooth-scroll"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Bem vindo, eu sou
              <span className="gradient-text block">Heitor do Nascimento Martins</span>
            </h2>
            <p className="text-xl mb-8 text-slate-600 dark:text-slate-400">
              Desenvolvedor de Sistemas, especializado em desenvolvimento web, mobile e desenvolvimento de softwares e aplicações em Python. 
              Formado em Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá.
            </p>
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
            <img 
              src="https://raw.githubusercontent.com/Heitornm/hnmartins/refs/heads/main/img/heitorimg.png" 
              alt="Heitor Martins - Desenvolvedor de Sistemas" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
