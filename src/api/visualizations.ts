import {useQuery} from '@tanstack/react-query';

const fetchVisualizations = async () => {
  const resp = await fetch('https://mattermotion.com/szymon_admin/wp-json/wp/v2/visualization');
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryVisualizations = () => {
  return useQuery({
    queryKey: ['visualizations'],
    queryFn: fetchVisualizations,
  });
};

const fetchVisualization = async (id?: string) => {
  const resp = await fetch(`https://mattermotion.com/szymon_admin/wp-json/wp/v2/visualization/${id}`);
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryVisualization = (id?: string) => {
  return useQuery({
    queryKey: ['visualization'],
    queryFn: () => fetchVisualization(id),
    enabled: Boolean(id),
  });
};
