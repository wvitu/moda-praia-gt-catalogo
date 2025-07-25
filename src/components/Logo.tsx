import React from 'react';
import logoGT from '@/assets/logo-gt.png';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img src={logoGT} alt="Moda Praia GT" className="w-12 h-12" />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Moda Praia GT
        </h1>
        <p className="text-sm text-muted-foreground">Atacado & Revenda</p>
      </div>
    </div>
  );
};

export default Logo;