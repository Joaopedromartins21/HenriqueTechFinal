import React, { useState } from 'react';
import {
  Code2,
  Smartphone,
  Globe,
  ChevronRight,
  Users,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Trophy,
  Target,
  BarChart3,
  Clock,
  Star,
  Cpu,
  HardDrive,
  Phone,
  Instagram,
  Mail,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561999920195', '_blank');
  };

  const handleCallApp = () => {
    window.open('tel:61999920195');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/henriquetech7/', '_blank');
  };

  const testimonials = [
    {
      name: 'Marcos Junior',
      role: 'CEO',
      content:
        'A Henrique Tech é nossa principal fornecedora. Sempre com as melhores peças e preços competitivos.',
      company: 'M&M Atacadista',
    },
    {
      name: 'Joao Pedro',
      role: 'Gerente de TI',
      content:
        'Excelente atendimento e produtos de qualidade. A entrega é sempre rápida e eficiente.',
      company: 'NextGen Solutions',
    },
    {
      name: 'Christiano SantAnna',
      role: 'Diretor Executivo',
      content: 'Encontro tudo que preciso para minhas montagens.',
      company: 'Citz Contabilidade LTDA',
    },
  ];

  const stats = [
    { number: 1000, label: 'Produtos Vendidos', prefix: '+' },
    { number: 100, label: 'Clientes Satisfeitos', suffix: '%' },
    { number: 10, label: 'Anos no Mercado', prefix: '+' },
    { number: 1000, label: 'Negociações Fechadas', prefix: '+' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#000B3D] shadow-sm fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center h-10">
              {' '}
              {/* Altura fixa da hotbar */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/logoprime.png"
                className="h-12 max-h- full object-contain" // Ajusta a logo sem estourar a hotbar
                alt="Henrique Tech"
              />
            </div>
            <div className="hidden md:flex space-x-12">
              <motion.a
                whileHover={{ scale: 1.05, color: '#fff' }}
                href="#solutions"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Serviços
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#fff' }}
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sobre
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#fff' }}
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Depoimentos
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#fff' }}
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contato
              </motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="text-white hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstagramClick}
                className="text-white hover:text-[#E4405F] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold text-center text-gray-900 mb-6 mx-auto max-w-4xl"
            >
              Seu ponto de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000B3D] to-blue-500">
                Compras & Vendas
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center"
            >
              Pagamento A Vista! Eletrônicos & Informatica no Geral
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#000B3D] text-white px-8 py-3 rounded-full text-lg hover:bg-blue-900 transition-colors inline-flex items-center"
                onClick={handleCallApp}
              >
                Ligar Agora!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#000B3D] text-[#000B3D] px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition-colors"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Tudo que você precisa em um só lugar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
                alt="PC Gamer RTX"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-bold text-white">PC Gamer</h3>
                <p className="text-gray-300">NVIDIA, AMD, INTEL</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1558864559-ed673ba3610b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="PC Gamer RGB"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Notebooks</h3>
                <p className="text-gray-300">iPhone, iPad & Macbook</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1597138768744-9f97be8cdd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="PC Gamer Setup"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Mini PC</h3>
                <p className="text-gray-300">DELL, Lenovo, HP etc</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-12 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-4xl font-bold text-[#000B3D]">
                  {statsInView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  )}
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="solutions"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Oferecemos uma ampla variedade de Serviços de alta qualidade para
            sua Empresa.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Cpu,
                title: 'Compra & Venda',
                description: 'Eletronicos e informatica no Geral.',
                features: ['Mini PCs', 'Notebooks', 'PC Gamer'],
              },
              {
                icon: Cpu,
                title: 'Montagem de PCs & Micro PCs',
                description: 'PCs no Ambito Empresarial ou Gamers.',
                features: [
                  'NVIDIA e AMD',
                  'RTX e Radeon',
                  'Intel, AMD & Apple',
                ],
              },
              {
                icon: HardDrive,
                title: 'Alta Variedade de Compra',
                description: 'Itens Variados.',
                features: [
                  'Ouro (Aliancas,Joias,Correntes)',
                  'iPhone,iPad e Macbook',
                  'Placas de Video RTX',
                ],
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <product.icon className="h-12 w-12 text-[#000B3D] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Como Funciona o Nosso Processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Processo simples e rápido
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Target,
                title: '1. Escolha',
                description: 'Selecione os produtos desejados',
              },
              {
                icon: BarChart3,
                title: '2. Orçamento',
                description: 'Receba sua cotação personalizada',
              },
              {
                icon: Clock,
                title: '3. Pagamento',
                description: 'Escolha a forma de pagamento',
              },
              {
                icon: Rocket,
                title: '4. Entrega',
                description: 'Envios para todo o Brasil',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <step.icon className="h-8 w-8 text-[#000B3D]" />
                </motion.div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">
                Por que escolher a Henrique Tech?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Trophy,
                    title: 'Produtos Originais',
                    description:
                      'Todas as peças são originais com garantia de fábrica.',
                  },
                  {
                    icon: Users,
                    title: 'Suporte Especializado',
                    description:
                      'Equipe técnica pronta para ajudar na escolha ideal.',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Atendimento Rápido',
                    description: 'Resposta ágil para suas dúvidas e pedidos.',
                  },
                  {
                    icon: Star,
                    title: 'Melhor Preço',
                    description: 'Preços competitivos e condições especiais.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <feature.icon className="h-6 w-6 text-[#000B3D] mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
                alt="Componentes de PC"
                className="rounded-lg shadow-lg transform transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            A satisfação de nossos clientes é nossa melhor recomendação
          </motion.p>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <p className="text-xl text-gray-600 mb-6">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-lg">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-[#000B3D]">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-[#000B3D]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-[#000B3D]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              Gostaria de Vender Algo?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-white opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Entre em contato conosco e faça um orçamento personalizado para
              suas necessidades
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="text-white hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon />
            </motion.button>
          </div>
        </div>
      </motion.section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Estamos prontos para proporcionar um Atendimento Personalizado
                para as suas Necessidades.
              </p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-[#000B3D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">henriquetechbr@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-[#000B3D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">(61) 99992-0195</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">(61) 99992-0195</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-[#000B3D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localizacao</h3>
                    <p className="text-gray-600">Brasilia, DF</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000B3D] focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000B3D] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000B3D] focus:border-transparent"
                    rows={4}
                    placeholder="Descreva os produtos que você procura"
                  ></motion.textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#000B3D] text-white py-2 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="col-span-2 md:col-span-1"
            >
              <img
                src="/logoprime.png"
                alt="Henrique Tech"
                className="h-10 mb-4"
              />
              <p className="text-gray-400">Henrique Tech</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-4"> Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Processadores
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Placas de Vídeo
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Armazenamento
                  </a>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Sobre Nós
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Garantia
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <motion.li whileHover={{ x: 5 }}>
                  henriquetechbr@gmail.com
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>(61) 99992-0195</motion.li>
                <motion.li whileHover={{ x: 5 }}>Brasilia, DF</motion.li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  onClick={handleInstagramClick}
                  className="text-gray-400 hover:text-[#E4405F] cursor-pointer transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  onClick={handleWhatsAppClick}
                  className="text-gray-400 hover:text-[#25D366] cursor-pointer transition-colors"
                >
                  <WhatsAppIcon />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2025 Henrique Tech. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
