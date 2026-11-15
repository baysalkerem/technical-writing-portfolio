import React, {createContext, useContext, useEffect, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';

export const styleGuides = {
  microsoft: {
    label: 'Microsoft',
    name: 'Microsoft Writing Style Guide',
    url: 'https://learn.microsoft.com/en-us/style-guide/welcome/',
  },
  google: {
    label: 'Google',
    name: 'Google developer documentation style guide',
    url: 'https://developers.google.com/style',
  },
};

const preferenceKey = 'portfolio-writing-style';
const WritingStyleContext = createContext(null);

function isWritingStyle(value) {
  return value === 'microsoft' || value === 'google';
}

export function WritingStyleProvider({children}) {
  const history = useHistory();
  const location = useLocation();
  const isBrowser = useIsBrowser();
  const [savedStyle, setSavedStyle] = useState('microsoft');
  const requestedStyle = new URLSearchParams(location.search).get('style');
  const urlStyle = isBrowser && isWritingStyle(requestedStyle) ? requestedStyle : null;

  useEffect(() => {
    if (!isBrowser) return;

    if (urlStyle) setSavedStyle(urlStyle);

    try {
      if (urlStyle) {
        localStorage.setItem(preferenceKey, urlStyle);
      } else {
        const storedStyle = localStorage.getItem(preferenceKey);
        if (isWritingStyle(storedStyle)) setSavedStyle(storedStyle);
      }
    } catch {
      // The URL and in-memory selection still work if storage is unavailable.
    }
  }, [isBrowser, urlStyle]);

  function setStyle(nextStyle) {
    const params = new URLSearchParams(location.search);
    params.set('style', nextStyle);
    history.replace({...location, search: params.toString()});
  }

  return (
    <WritingStyleContext.Provider value={{style: urlStyle ?? savedStyle, setStyle}}>
      {children}
    </WritingStyleContext.Provider>
  );
}

export function useWritingStyle() {
  return useContext(WritingStyleContext);
}

export function StyleText({children, google}) {
  const {style} = useWritingStyle();
  return style === 'google' ? google : children;
}

export function StyleGuideLink() {
  const {style} = useWritingStyle();
  const guide = styleGuides[style];
  return <a href={guide.url}>{guide.name}</a>;
}
