export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://raw.githubusercontent.com/Heitornm/hnmartins/refs/heads/main/img/heitorimg.png" 
              alt="Workspace de desenvolvimento" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
           
            <p className="text-lg">
              Com sólida base 
              em programação multi-paradigma (Python, Java, PHP, JavaScript) e experiência em desenvolvimento 
              web (HTML5, CSS3) e mobile (React Native).
            </p>
            
            <p className="text-lg">
              Proativo, curioso, empático, com pensamento crítico e senso de prioridade. Procuro ser produtivo, 
              tenho ótimo relacionamento interpessoal, resolução de problemas e inteligência emocional.
            </p>
            <p className="text-lg">
              Procuro sempre me atualizar com as tecnologias do mercado para trazer as melhores soluções para meus projetos.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Anos de Estudo</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Cursos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
