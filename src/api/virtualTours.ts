import {useQuery} from '@tanstack/react-query';

const fetchVirtualTours = async () => {
  const resp = await fetch('https://mattermotion.com/szymon_admin/wp-json/wp/v2/virtual_tour');
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

const fetchVirtualTour = async (id?: string) => {
  const resp = await fetch(`https://mattermotion.com/szymon_admin/wp-json/wp/v2/virtual_tour/${id}`);
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryVirtualTour = (id?: string) => {
  return useQuery({
    queryKey: ['virtualTour'],
    queryFn: () => fetchVirtualTour(id),
    enabled: Boolean(id),
  });
};
