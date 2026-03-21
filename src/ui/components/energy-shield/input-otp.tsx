'use client';

import { createInputOtpFoundation } from '../_shared/family-foundations';

const foundation = createInputOtpFoundation('energy-shield');

export const InputOTP = foundation.InputOTP;
export const InputOTPGroup = foundation.InputOTPGroup;
export const InputOTPSlot = foundation.InputOTPSlot;
export const InputOTPSeparator = foundation.InputOTPSeparator;

export default InputOTP;
