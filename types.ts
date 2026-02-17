// Fix: Imported React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimelineStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
}