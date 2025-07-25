import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, description }) => {
  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden border border-border">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button variant="outline" size="sm">
            Ver Mais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;