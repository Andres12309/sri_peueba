import useSWR from 'swr';
import API from './index';

export const useCompanias = () => {
  const { data, error } = useSWR( `/compania/consultar`, API.fetcher );

  return {
    companias: data && data.data,
    isLoading: !error && !data,
    isError: error
  };
};
