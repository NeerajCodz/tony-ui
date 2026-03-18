/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppRouter } from './router';
import { ColorProvider, ThemeProvider } from './ui';

export default function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <AppRouter />
      </ColorProvider>
    </ThemeProvider>
  );
}
