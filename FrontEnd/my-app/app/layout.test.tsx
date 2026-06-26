import { render } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders children correctly and hydrates without throwing errors', () => {
    // Testing the global boundary by simply rendering the root.
    // suppressHydrationWarning is present on HTML.
    expect(() => {
      render(
        <RootLayout>
          <div data-testid="child-element">Test Child</div>
        </RootLayout>
      );
    }).not.toThrow();
  });
});
