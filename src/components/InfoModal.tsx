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
    <DialogContent
      className="max-w-2xl w-full max-h-[90vh] p-0 overflow-hidden bg-background rounded-xl"
      style={{ inset: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <div className="flex flex-col max-h-[90vh]">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="flex justify-between items-center w-full text-lg font-semibold">
            {title}
            <DialogTrigger asChild>
              <button aria-label="Fechar">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </DialogTrigger>
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto p-6 text-sm text-muted-foreground text-left whitespace-pre-line">
          {children}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default InfoModal;
