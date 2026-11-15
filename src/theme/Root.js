import React from 'react';
import {WritingStyleProvider} from '../components/WritingStyle';

export default function Root({children}) {
  return <WritingStyleProvider>{children}</WritingStyleProvider>;
}
