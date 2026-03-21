'use client';

import { createDigitalClockFoundation } from '../_shared/family-foundations';

const foundation = createDigitalClockFoundation('quantum-gate');

export const DigitalClock = foundation.DigitalClock;

export default DigitalClock;
