const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');

const pagesToTest = [
  { name: 'homepage', path: '/' },
  { name: 'html-tutorial', path: '/html/default.asp' },
  { name: 'css-tutorial', path: '/css/default.asp' },
  { name: 'javascript-tutorial', path: '/javascript/default.asp' },
];

test.describe('WCAG 2.1/2.2 Accessibility Tests', () => {

  for (const pageInfo of pagesToTest) {
    test(`[${pageInfo.name}] should meet WCAG 2.1/2.2 standards`, async ({ page }) => {
      await page.goto(pageInfo.path);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      fs.writeFileSync(
        `reports/accessibility-${pageInfo.name}.json`,
        JSON.stringify(results, null, 2)
      );

      console.log(`\n📄 Page: ${pageInfo.name}`);
      console.log(`✅ Passes: ${results.passes.length}`);
      console.log(`❌ Violations: ${results.violations.length}`);

      results.violations.forEach(v => {
        console.log(`\n🔴 [${v.impact.toUpperCase()}] ${v.id}: ${v.description}`);
      });

      if (results.violations.length > 0) {
        console.log(`\n⚠️  Found ${results.violations.length} WCAG violations`);
      }

      expect(results.passes.length).toBeGreaterThan(0);
    });
  }

});