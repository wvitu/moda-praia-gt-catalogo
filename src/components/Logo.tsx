import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
        <span className="text-white font-bold text-xl">GT</span>
      </div>
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