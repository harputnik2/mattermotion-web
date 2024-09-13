import {useQuery} from '@tanstack/react-query';

const fetchVirtualTours = async () => {
  const resp = await fetch('http://mattermotion.com/szymon_admin/wp-json/wp/v2/virtual_tour');
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryVirtualTours = () => {
  return useQuery({
    queryKey: ['virtualTours'],
    queryFn: fetchVirtualTours,
  });
};
