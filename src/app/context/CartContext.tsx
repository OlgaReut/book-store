import React, { createContext, useState, ReactNode, useMemo } from 'react';

type CartContextType = {
    sumTotal: number;
    setSumTotal: (value: number) => void;
    vat: number;
    setVat: (value: number) => void;
    total: number;
    setTotal: (value: number) => void;
    counters: { [key: string]: number };
    setCounters: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sumTotal, setSumTotal] = useState(0);
    const [vat, setVat] = useState(0);
    const [counters, setCounters] = useState({});
    const [total, setTotal] = useState(0)
    const value = useMemo(() => ({
        sumTotal,
        setSumTotal,
        vat,
        setVat,
        total,
        setTotal,
        counters,
        setCounters
    }), [sumTotal, counters]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};