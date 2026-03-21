export async function loadVersionModule(
  version: string,
  componentName: string,
  preferAngularCorner = false
) {
  try {
    return await import(`../components/${version}/${componentName}.tsx`);
  } catch {
    try {
      return await import(`../components/default/${componentName}.tsx`);
    } catch {
      if (preferAngularCorner && version !== 'angular-corner') {
        return import(`../components/angular-corner/${componentName}.tsx`);
      }
      throw new Error(`Unable to load ${componentName} for version ${version}`);
    }
  }
}

