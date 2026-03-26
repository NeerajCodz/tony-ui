/**
 * Calendar Showcase
 */

import React, { useState } from 'react';
import { ShowcaseTemplate } from '../_components';
import { Calendar } from '@/ui/handlers/calendar';

const CALENDAR_TYPES = ['default', 'range'];

export function CalendarShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ShowcaseTemplate
      componentName="Calendar"
      availableTypes={CALENDAR_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Calendar
          version={version}
          variant={variant}
          effects={effects}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      )}
    />
  );
}

export default CalendarShowcase;
