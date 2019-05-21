import * as React from 'react';

export default function defaultFooterRenderer({dataKey, label}) {
  return (
    <span className="ReactVirtualized__Table__footerTruncatedText">
      {label}
    </span>
  );
}
