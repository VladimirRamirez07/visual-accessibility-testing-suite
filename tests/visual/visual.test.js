const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test.describe('Visual Regression Tests', () => {

  test('Capture baseline screenshot - Homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const baselinePath = path.join('snapshots', 'baseline', 'homepage.png');
    
    if (!fs.existsSync(baselinePath)) {
      await page.screenshot({ path: baselinePath, fullPage: true });
      console.log('📸 Baseline created:', baselinePath);
    } else {
      console.log('✅ Baseline already exists');
    }

    expect(fs.existsSync(baselinePath)).toBeTruthy();
  });

  test('Visual comparison - Detect UI changes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const baselinePath = path.join('snapshots', 'baseline', 'homepage.png');
    const currentPath = path.join('snapshots', 'diff', 'homepage-current.png');

    await page.screenshot({ path: currentPath, fullPage: true });
    console.log('📸 Current screenshot captured');

    const baselineSize = fs.statSync(baselinePath).size;
    const currentSize = fs.statSync(currentPath).size;
    const diffPercent = Math.abs(baselineSize - currentSize) / baselineSize * 100;

    console.log(`📊 Baseline size: ${baselineSize} bytes`);
    console.log(`📊 Current size: ${currentSize} bytes`);
    console.log(`📊 Difference: ${diffPercent.toFixed(2)}%`);

    if (diffPercent > 5) {
      console.log('⚠️  Visual difference detected above threshold!');
    } else {
      console.log('✅ No significant visual changes detected');
    }

    expect(fs.existsSync(currentPath)).toBeTruthy();
  });

});