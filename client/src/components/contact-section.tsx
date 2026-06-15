import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Acessando a variável de ambiente configurada no Render (padrão do Vite)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

    if (!accessKey) {
      toast({
        title: "Erro de configuração",
        description: "A chave do formulário não foi encontrada nas variáveis de ambiente.",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfólio - HeitorModern"
        })
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve!",
        })

        // CORREÇÃO: Limpando o formulário para strings vazias de verdade
        setFormData(initialFormState)
      } else {
        throw new Error(data.message || "Erro ao processar envio")
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // CORREÇÃO: Classes completas mapeadas explicitamente para o Tailwind não removê-las no Purge do build
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "heitornmartins@gmail.com",
      href: "mailto:heitornmartins@gmail.com",
      bgClass: "bg-blue-600/10",
      iconClass: "text-blue-600"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+55 (11) 98017-0584",
      href: "https://wa.me/5511980170584",
      bgClass: "bg-green-500/10",
      iconClass: "text-green-500"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/heitornm",
      href: "https://www.linkedin.com/in/heitor-nascimento-martins-388a33395",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/heitornm",
      href: "https://github.com/heitornm",
      bgClass: "bg-gray-800/10 dark:bg-slate-200/10",
      iconClass: "text-gray-800 dark:text-slate-200"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações.
            Vamos conversar sobre como posso contribuir com seu projeto!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-hover bg-slate-50 dark:bg-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <Input
                  type="text"
                  placeholder="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  placeholder="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:transform hover:scale-105 transition-transform"
                  >
                    {/* CORREÇÃO: Utilizando as novas propriedades estáticas para estilização segura */}
                    <div className={`w-12 h-12 ${info.bgClass} rounded-lg flex items-center justify-center`}>
                      <i className={`${info.icon} ${info.iconClass}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Contact */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Conversa Rápida?</h4>
              <p className="mb-4 opacity-90">Clique no botão abaixo para iniciar uma conversa no WhatsApp</p>
              <a
                href="https://wa.me/5511980170584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}