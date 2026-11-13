import React from 'react';
import Admonition from '@theme/Admonition';

export default function PortfolioNotice() {
  return (
    <Admonition type="info" title="Portfolio demonstration">
      <p>
        Nexus Connect is fictional. The interface labels, URLs, configuration
        fields, and commands in these guides are illustrative and must not be
        used with production systems.

        These samples follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/).
      </p>
    </Admonition>
  );
}
