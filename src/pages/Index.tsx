import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Truck, Package, Users, Phone, Instagram, MapPin, ShoppingBag } from 'lucide-react';
import Logo from '@/components/Logo';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';

// Import images
import heroImage from '@/assets/hero-beach-fashion.jpg';
import bikiniPurple from '@/assets/bikini-purple.jpg';
import coverUpBlack from '@/assets/cover-up-black.jpg';
import beachBag from '@/assets/beach-bag.jpg';
import beachHat from '@/assets/beach-hat.jpg';

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5584999999999?text=Olá! Gostaria de conhecer o catálogo da Moda Praia GT', '_blank');
  };

  const features = [
    {
      icon: Truck,
      title: "Frete Rápido",
      description: "Envio econômico para todo o Brasil com transportadoras confiáveis"
    },
    {
      icon: Package,
      title: "+100 Modelos",
      description: "Catálogo atualizado toda semana com as últimas tendências"
    },
    {
      icon: MessageCircle,
      title: "Suporte WhatsApp",
      description: "Atendimento direto e personalizado via WhatsApp"
    },
    {
      icon: ShoppingBag,
      title: "Pedido Mínimo",
      description: "Valores acessíveis para começar sua revenda"
    }
  ];

  const products = [
    {
      image: bikiniPurple,
      title: "Biquíni Premium",
      price: "A partir de R$ 35",
      description: "Revenda por até R$ 89"
    },
    {
      image: coverUpBlack,
      title: "Saída de Praia",
      price: "A partir de R$ 45",
      description: "Revenda por até R$ 120"
    },
    {
      image: beachBag,
      title: "Bolsa de Praia",
      price: "A partir de R$ 28",
      description: "Revenda por até R$ 79"
    },
    {
      image: beachHat,
      title: "Chapéu Elegante",
      price: "A partir de R$ 22",
      description: "Revenda por até R$ 65"
    }
  ];

  const testimonials = [
    {
      name: "Fernanda Silva",
      location: "São Paulo, SP",
      testimonial: "Já revendi mais de 200 peças! Envio rápido e ótimo atendimento.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      location: "Salvador, BA",
      testimonial: "Catálogo lindo e peças de qualidade, clientes amam!",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      location: "Fortaleza, CE",
      testimonial: "Margem excelente e produtos que vendem sozinhos!",
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
              Revenda com Estilo, Lucro e Agilidade!
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Atacado com +100 modelos disponíveis e envio para todo o Brasil
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="text-xl px-8 py-4"
          >
            <MessageCircle className="w-6 h-6" />
            Acessar Catálogo no WhatsApp
          </Button>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que revender com a Moda Praia GT?
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos tudo que você precisa para ter sucesso
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
              Conheça alguns dos nossos best-sellers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={handleWhatsAppClick}>
              Ver Catálogo Completo
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
              Histórias reais de sucesso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revender com a gente é simples
            </h2>
            <p className="text-xl text-muted-foreground">
              Apenas 3 passos para começar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Entre no Catálogo</h3>
              <p className="text-muted-foreground">Acesse nosso catálogo completo via WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Escolha e Peça</h3>
              <p className="text-muted-foreground">Selecione seus produtos e feche o pedido conosco</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Receba em Casa</h3>
              <p className="text-muted-foreground">Produto chega no seu endereço com frete acessível</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronta para lucrar com Moda Praia?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Receba o catálogo agora mesmo e comece a vender hoje!
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="text-xl px-8 py-4 hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            Quero Revender
          </Button>
        </div>
      </section>

      {/* Preços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valores acessíveis e competitivos
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece com pouco e lucre muito
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Kit Inicial</h3>
                <p className="text-3xl font-bold text-foreground mb-2">R$ 199</p>
                <p className="text-muted-foreground">10 peças variadas</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Margem</h3>
                <p className="text-3xl font-bold text-foreground mb-2">até 40%</p>
                <p className="text-muted-foreground">Em peças promocionais</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Desconto</h3>
                <p className="text-3xl font-bold text-foreground mb-2">Especial</p>
                <p className="text-muted-foreground">Pedidos acima de 100 peças</p>
              </div>
            </div>
          </div>
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
                  <span>(84) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@modapraiagt</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Localização</h4>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Enviamos de RN para todo o Brasil</span>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;