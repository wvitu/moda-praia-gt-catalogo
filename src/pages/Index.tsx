import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Truck, Package, Users, Phone, Instagram, MapPin, ShoppingBag } from 'lucide-react';
import Logo from '@/components/Logo';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import InfoModal from '@/components/InfoModal';


// Import images
import heroImage from '@/assets/hero-beach-fashion.jpg';
import bikiniPurple from '@/assets/bikini-purple.jpg';
import coverUpBlack from '@/assets/cover-up-black.jpg';
import beachBag from '@/assets/beach-bag.jpg';
import beachHat from '@/assets/beach-hat.jpg';

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5584981506259?text=Olá! Gostaria de conhecer o catálogo da Moda Praia GT', '_blank');
  };

  const handleCatalogClick = () => {
    window.open('https://wa.me/c/558481506259', '_blank');
  };

  const handleVipGroupClick = () => {
    window.open('https://chat.whatsapp.com/KteiuJIcAKi5qlPRlsIFQs', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/modapraiagt_/', '_blank');
  };

  const features = [
    {
      icon: Truck,
      title: "Frete Ágil",
      description: "Envio para todo o Brasil com custo econômico e diversas transportadoras"
    },
    {
      icon: Package,
      title: "+200 Itens Atacado",
      description: "Catálogo com mais de 100 itens de atacado disponíveis"
    },
    {
      icon: MessageCircle,
      title: "Suporte WhatsApp",
      description: "Atendimento direto para lojistas via WhatsApp"
    },
    {
      icon: ShoppingBag,
      title: "Pedido Mínimo R$ 300",
      description: "Primeira compra: mínimo 10 peças (produtos variados)"
    }
  ];

  const products = [
    {
      image: bikiniPurple,
      title: "Conjunto Biquíni",
      price: "A partir de R$ 25",
      description: "Revenda por até R$ 99,90"
    },
    {
      image: coverUpBlack,
      title: "Canga/Saída de Praia",
      price: "A partir de R$ 15",
      description: "Revenda por até R$ 69,90"
    },
    {
      image: beachBag,
      title: "Monte seu KIT de Bolsa e Chapéu de Praia",
      price: "A partir de R$ 40",
      description: "Revenda por até R$ 129,90"
    },
    {
      image: beachHat,
      title: "Chapéu Elegante",
      price: "A partir de R$ 22",
      description: "Revenda por até R$ 65"
    }
  ];

  const testemunhos = [
    {
      name: "Soul Store",
      location: "João Pessoa, PB",
      testimonial: "Atendimento top, entrega no prazo certo e peças de qualidade.",
      rating: 5
    },
    {
      name: "Francisca Gomes",
      location: "São Luís, MA",
      testimonial: "Já sou cliente a mais de dois anos. Material de ótima qualidade, preço acessível e excelente atendimento! Super recomendado!!!",
      rating: 5
    },
    {
      name: "Adriana Moita",
      location: "Rio Grande, RS",
      testimonial: "Ótimo atendimento, mercadoria entregue rapidamente, muito bom comprar com eles",
      rating: 5
    },
    {
      name: "Menina do Rio",
      location: "Boa Vista, RR",
      testimonial: "Muito atenciosos e eficientes. Recomendo",
      rating: 5
    },
    {
      name: "Maria Tavares",
      location: " Pipa, RN",
      testimonial: "Loja linda,bem organizada, preço acessível e um atendimento diferenciado.❤️",
      rating: 5
    },
    {
      name: "Franciely A de Souza",
      location: " São José dos Pinhais, PR",
      testimonial: "Com toda certeza a melhor loja moda praia, muita variedade e atendimento excelente... Sou cliente fiel ❤️",
      rating: 5
    },
    {
      name: "Priscilla Rodrigues",
      location: " Maricá, RJ",
      testimonial: "Minha experiência é melhor ! Sou cliente fiel , amo os produtos da loja , pela qualidade e preço!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <Button variant="whatsapp" onClick={handleWhatsAppClick} className="hidden md:flex">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Moda Praia GT
            <span className="block text-2xl md:text-3xl mt-2 opacity-90">
              Atacado para Lojistas de Todo o Brasil!
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Compre em atacado de forma fácil, com preço justo, sem precisar de CNPJ e envio ágil para todo o Brasil! Peças que podem te dar lucro superior a 200%!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleCatalogClick}
              className="text-xl px-8 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              Ver Catálogo Completo
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleVipGroupClick}
              className="text-xl px-8 py-4"
            >
              <Users className="w-6 h-6" />
              Grupo VIP Atacado
            </Button>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que comprar atacado com a Moda Praia GT?
            </h2>
            <p className="text-xl text-muted-foreground">
              Compre tudo que você precisa para sua loja de moda praia em um só lugar!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos nossos mais vendidos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={handleCatalogClick}>
              Solicite seu orçamento agora mesmo!
            </Button>
          </div>
        </div>
      </section>

{/* Depoimentos Section */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Veja o que nossos parceiros dizem
      </h2>
      <p className="text-xl text-muted-foreground">
        SOMOS 100% 5 ESTRELAS NO GOOGLE!
      </p>
    </div>

    <div className="relative">
      {/* Faixa de cards com rolagem horizontal */}
      <div
        className="overflow-x-auto flex gap-4 scroll-smooth no-scrollbar px-8"
        ref={(el) => (window.testemunhoscroll = el)}
      >
        {testemunhos.concat(testemunhos).map((testimonial, index) => (
          <div className="min-w-[300px] max-w-[350px] flex-shrink-0" key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Botão esquerda */}
      <div className="absolute inset-y-0 left-0 flex items-center -translate-x-full pl-4">
        <button
          onClick={() => {
            const el = window.testemunhoscroll;
            el.scrollLeft -= 350;
            if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth / 2;
          }}
          className="bg-white rounded-full shadow border border-muted p-2 hover:scale-105 transition"
        >
          ◀
        </button>
      </div>

      {/* Botão direita */}
      <div className="absolute inset-y-0 right-0 flex items-center translate-x-full pr-4">
        <button
          onClick={() => {
            const el = window.testemunhoscroll;
            el.scrollLeft += 350;
            if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
          }}
          className="bg-white rounded-full shadow border border-muted p-2 hover:scale-105 transition"
        >
          ▶
        </button>
      </div>
    </div>
  </div>
</section>


      

      {/* Como Funciona Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como comprar no atacado?
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples para lojistas e revendedores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Solicite o catálogo</h3>
              <p className="text-muted-foreground">Entre no WhatsApp e solicite o catálogo e escolha seus produtos</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Feche o Pedido</h3>
              <p className="text-muted-foreground">Mínimo 10 peças (primeira compra) - Pedido mínimo R$ 300.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Envio</h3>
              <p className="text-muted-foreground">Escolha o método de envio que melhor lhe atende, após o pagamento o rastreio é enviado. Prontinho, é só aguardar receber e vender bastante!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para comprar no atacado?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Solicite seu orçamento gratuito e comece a lucrar hoje!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="text-xl px-8 py-4 hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleVipGroupClick}
              className="text-xl px-8 py-4 hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-primary"
            >
              <Users className="w-6 h-6" />
              Grupo VIP
            </Button>
          </div>
        </div>
      </section>

      {/* Preços Section */}
      <section className="py-20">
        <div className="mt-2 space-x-4 flex flex-wrap justify-center items-center gap-4">
  <InfoModal title="Política de Privacidade" trigger={<span className="text-primary hover:underline cursor-pointer">Política de Privacidade</span>}>
    Respeitamos sua privacidade. Seus dados serão utilizados apenas para fins comerciais e nunca compartilhados com terceiros.
  </InfoModal>

  <InfoModal title="Termos de Uso" trigger={<span className="text-primary hover:underline cursor-pointer">Termos de Uso</span>}>
    Ao utilizar este site, você concorda com nossos termos de uso. Todas as vendas são realizadas conforme regras do Código de Defesa do Consumidor.
  </InfoModal>

  <InfoModal title="Quem Somos" trigger={<span className="text-primary hover:underline cursor-pointer">Quem Somos</span>}>
    A Moda Praia GT é referência em moda praia no atacado. Atuamos em todo o Brasil com foco em lojistas e revendedores.
  </InfoModal>

  <InfoModal title="Trocas e Devoluções" trigger={<span className="text-primary hover:underline cursor-pointer">Trocas e Devoluções</span>}>
    Aceitamos trocas por defeito em até 7 dias. Entre em contato via WhatsApp para iniciar o processo.
  </InfoModal>

  <InfoModal title="Perguntas Frequentes" trigger={<span className="text-primary hover:underline cursor-pointer">Perguntas Frequentes</span>}>
    <ul className="list-disc pl-4 space-y-2">
      <li>Pedido mínimo: R$300 ou 10 peças.</li>
      <li>Enviamos para todo o Brasil.</li>
      <li>Não precisa de CNPJ para comprar.</li>
    </ul>
  </InfoModal>
</div>

      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-secondary-foreground/80">
                Sua parceira ideal para revenda de moda praia com qualidade e estilo.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(84) 98150-6259</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-primary" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Atacado</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-primary" onClick={handleInstagramClick}>
                  <Instagram className="w-4 h-4" />
                  <span>@modapraiagt_</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Localização</h4>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>R Erivan França 33, Ponta Negra - Natal/RN. Enviamos para todo o Brasil</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-secondary-foreground/80">
              © 2025 Moda Praia GT. Todos os direitos reservados.
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                Termos de Uso
              </a>
            </div>
            <div className="mt-4 text-sm text-secondary-foreground/60">
              Desenvolvido por{' '}
              <a 
                href="https://github.com/wvitu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Vitor DEV
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;