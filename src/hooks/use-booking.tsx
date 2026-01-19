'use client';

import * as React from 'react';

interface BookingContextType {
  isOpen: boolean;
  openBooking: (preselectedService?: string) => void;
  closeBooking: () => void;
  preselectedService: string | undefined;
}

const BookingContext = React.createContext<BookingContextType | undefined>(
  undefined
);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [preselectedService, setPreselectedService] = React.useState<
    string | undefined
  >(undefined);

  const openBooking = (serviceSlug?: string) => {
    setPreselectedService(serviceSlug);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <BookingContext.Provider
      value={{ isOpen, openBooking, closeBooking, preselectedService }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = React.useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
