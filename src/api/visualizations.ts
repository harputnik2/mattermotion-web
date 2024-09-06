import {useQuery} from '@tanstack/react-query';

const fetchVisualizations = async () => {
  const resp = await fetch('http://mattermotion.com/szymon_admin/wp-json/wp/v2/visualization');
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
