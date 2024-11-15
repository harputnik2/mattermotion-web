import {useQuery} from '@tanstack/react-query';

const fetchHomepage = async () => {
  const resp = await fetch('https://mattermotion.com/szymon_admin/wp-json/wp/v2/homepage');
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
};

export const useQueryHomepage = () => {
  return useQuery({
    queryKey: ['homepage'],
    queryFn: fetchHomepage,
  });
};
