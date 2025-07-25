import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const PoliticasAtacado = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Políticas de Atacado - Moda Praia GT
        </h1>

        {/* Regras de Atacado */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-primary" />
            Regras para Atacado
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">Primeira Compra</h3>
              <p className="text-muted-foreground">
                Clientes novos devem adquirir no mínimo 10 peças na primeira compra 
                (não necessariamente do mesmo produto).
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">Pedido Mínimo</h3>
              <p className="text-muted-foreground">
                O frete é sempre por conta do cliente, com pedido mínimo de R$ 300 para envio.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">Descontos Especiais</h3>
              <p className="text-muted-foreground">
                Desconto em peças já com preços de atacado só será aplicado em quantidade de caixa fechada.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">Retirada</h3>
              <p className="text-muted-foreground">
                Retirada somente no endereço físico do depósito:<br />
                <strong>R. Erivan França, 33 - Piso 1, Orla de Ponta Negra, Natal/RN - CEP: 59090-165</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Formas de Pagamento */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-primary" />
            Formas de Pagamento
          </h2>
          
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold">PIX ou Transferência Bancária</h3>
              <p className="text-muted-foreground">Valor à vista com preço de atacado</p>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold">Link para Pagamento em Cartão via Mercado Pago</h3>
              <p className="text-muted-foreground">Acréscimo referente aos custos da plataforma</p>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold">Outras Plataformas</h3>
              <p className="text-muted-foreground">Preço conforme tarifas acrescidas do site responsável</p>
            </div>
          </div>
        </section>

        {/* Políticas de Troca */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-primary" />
            Trocas por Defeito de Fabricação
          </h2>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Prazo de 7 dias corridos após o recebimento</li>
              <li>• Produto deve estar sem uso, com etiqueta e nota fiscal</li>
              <li>• Troca por produto igual ou similar (mesmo valor) após análise</li>
              <li>• Defeitos: costura, zíper, material com problema, etc.</li>
            </ul>
          </div>
        </section>

        {/* Arrependimento */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-primary" />
            Arrependimento (Compra Fora do Estabelecimento)
          </h2>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-muted-foreground mb-4">
              <strong>Aplicável apenas em vendas online (WhatsApp, Instagram, etc.)</strong>
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Prazo de 7 dias corridos a partir do recebimento (Art. 49 do CDC)</li>
              <li>• Produtos devem estar sem uso, com etiquetas e embalagem original</li>
              <li>• Frete da devolução por conta do cliente</li>
              <li>• Devolução integral do valor pago</li>
            </ul>
          </div>
        </section>

        {/* Restrições */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <XCircle className="w-6 h-6 mr-2 text-red-500" />
            Itens SEM Possibilidade de Troca
          </h2>
          
          <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <ul className="space-y-2 text-red-700 dark:text-red-300">
              <li>• Peças promocionais, com desconto especial ou de liquidação</li>
              <li>• Peças íntimas ou com uso visível</li>
              <li>• Produtos sem etiqueta ou sem nota fiscal</li>
            </ul>
          </div>
        </section>

        {/* Importante */}
        <section className="mb-12">
          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Importante
            </h3>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Não há trocas por tamanho ou gosto</strong> - verifique a mercadoria antes de finalizar o pedido</li>
              <li>• Sempre solicite orçamento gratuito através do nosso WhatsApp</li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <Button onClick={() => window.open('https://wa.me/5584981506259', '_blank')} size="lg">
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PoliticasAtacado;