import React, {createContext, useContext, useState, useMemo} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const DataPersistContext = createContext();

export default function DataPersistProvider({children}) {
  const [isInternetConnection, setIsInternetConnection] = useState(false);

  // listener that identify automatically the status internet connection.
  const unsubscribe = useMemo(() => {
    NetInfo.addEventListener((state) => {
      //console.log('Connection type', state.type);
      setIsInternetConnection(state.isConnected);
    });
  }, []);

  const checkInternetStatus = async () => {
    await NetInfo.fetch().then((state) => {
      return state.isConnected;
    });
  };

  return (
    <DataPersistContext.Provider
      value={{isInternetConnection, checkInternetStatus}}>
      {children}
    </DataPersistContext.Provider>
  );
}

export function useDataPersist() {
  const context = useContext(DataPersistContext);
  if (!context) {
    throw new Error('useDataPersist must be used within a DataPersistProvider');
  }
  const {isInternetConnection, checkInternetStatus} = context;
  return {isInternetConnection, checkInternetStatus};
}
