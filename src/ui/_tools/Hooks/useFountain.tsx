import { useEffect } from 'react';

import { Fountain } from 'ui/_components/Fountain';

export const useFountain = () => {
  useEffect(() => {
    new Fountain();
  }, []);
};
