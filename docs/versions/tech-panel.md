# Version: Tech Panel

## Primary Shape: Single Cut Corner (Ticket)
A rectangle with exactly one corner cut (usually top-right or bottom-right).

## Geometry Specs
- **Corner Style**: 3 Sharp, 1 Chamfered.
- **Cut Size**: `15px`.
- **Clip Path**: `polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)` (Bottom-right cut).

## Design Philosophy
Asymmetric utility. Suggests a modular component that slides into a specific slot.
