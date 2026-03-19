# Version: Angular Corner

## Primary Shape: Chamfered Rectangle
A rectangle with 45-degree cuts (chamfers) on all four corners.

## Geometry Specs
- **Corner Style**: Chamfered (Angled cut).
- **Cut Size**: Fixed `10px` or `12px` cuts.
- **Clip Path**: `polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)`

## Design Philosophy
Industrial, rugged, and military-inspired. Removes soft curves to suggest durability and precision.

## Animation
- **Hover**: Corners may extend outward or glow intensity increases at the vertices.
- **Active**: Inner content depresses.
