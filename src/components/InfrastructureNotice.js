import React from 'react';
import Admonition from '@theme/Admonition';

export default function InfrastructureNotice() {
  return (
    <Admonition type="info" title="Fictional lab">
      <p>
        This sample uses fictional systems and illustrative output. Run commands only
        in an authorized lab after you confirm the targets and any recovery plan.
      </p>
    </Admonition>
  );
}
