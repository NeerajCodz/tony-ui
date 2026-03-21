'use client';

import { createDigitalClockFoundation } from '../_shared/family-foundations';

const foundation = createDigitalClockFoundation('terminal-window');

export const DigitalClock = foundation.DigitalClock;

export default DigitalClock;
