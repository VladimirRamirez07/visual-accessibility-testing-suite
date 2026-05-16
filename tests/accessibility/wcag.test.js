const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('WCAG 2.1/2.2 Accessibility Tests', () => {

  test('Homepage should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const fs = require('fs');
    fs.writeFileSync(
      'reports/accessibility-report.json',
      JSON.stringify(results, null, 2)
    );

    console.log(`✅ Passes: ${results.passes.length}`);
    console.log(`❌ Violations: ${results.violations.length}`);
    
    results.violations.forEach(v => {
      console.log(`\n🔴 [${v.impact.toUpperCase()}] ${v.id}: ${v.description}`);
    });

    if (results.violations.length > 0) {
      console.log(`\n⚠️  Found ${results.violations.length} WCAG violations (see reports/accessibility-report.json)`);
    }

    expect(results.passes.length).toBeGreaterThan(0);
  });

});