/**
 * Carousel Showcase
 */

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/handlers/carousel';
import { ShowcaseTemplate } from '../_components';

const CAROUSEL_TYPES = ['default', 'fade'];

export function CarouselShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Carousel"
      availableTypes={CAROUSEL_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Carousel version={version} variant={variant} effects={effects} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center p-6 border rounded-md">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    />
  );
}

export default CarouselShowcase;
