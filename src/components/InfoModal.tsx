// src/components/InfoModal.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface InfoModalProps {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const InfoModal = ({ title, children, trigger }: InfoModalProps) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="max-w-2xl bg-background relative">
      <DialogHeader>
        <DialogTitle className="flex justify-between items-center">
          {title}
          <DialogTrigger asChild>
            <button aria-label="Fechar">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </DialogTrigger>
        </DialogTitle>
      </DialogHeader>
      <div className="py-4 text-sm text-muted-foreground text-left">
        {children}
      </div>
    </DialogContent>
  </Dialog>
);

export default InfoModal;
