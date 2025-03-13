import createCache from '@emotion/cache';

const createEmotionCache = () => {
  return createCache({ key: 'mui', prepend: true });
};

export default createEmotionCache;
