import React, { createContext, useState } from 'react';

// Kullanıcı nesnesi tipini tanımla
interface UserContextType {
  loggedIn: boolean;
}

// UserContext nesnesini oluştur
export const UserContext = createContext<UserContextType>({
  loggedIn: false,
});

// Context bileşenini oluştur
const Context = ({ children }: { children: React.ReactNode }) => {
  // UserContext'in başlangıç değerini belirle
  const [user, setUser] = useState<UserContextType>({
    loggedIn: false,
  });

  return (
    // UserContext nesnesini Provider ile sar
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;

