'use client';

import { createAnalogClockFoundation } from '../_shared/family-foundations';

const foundation = createAnalogClockFoundation('quantum-gate');

export const AnalogClock = foundation.AnalogClock;

export default AnalogClock;
