import {useQuery} from '@tanstack/react-query';

const fetchAnimations = async () => {
  const resp = await fetch('http://mattermotion.com/szymon_admin/wp-json/wp/v2/animation');
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryAnimations = () => {
  return useQuery({
    queryKey: ['animations'],
    queryFn: fetchAnimations,
  });
};


const fetchAnimation = async (id?: string) => {
  const resp = await fetch(`http://mattermotion.com/szymon_admin/wp-json/wp/v2/animation/${id}`);
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryAnimation = (id?: string) => {
  return useQuery({
    queryKey: ['animation'],
    queryFn: () => fetchAnimation(id),
    enabled: Boolean(id),
  });
};
