import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await mkdir('artifacts', { recursive: true });
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto('http://127.0.0.1:5173/');
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.portrait.ready').waitFor();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}px`);
    await page.screenshot({ path: `artifacts/portfolio-${width}.png`, fullPage: true });
    if (width <= 760) {
      await page.getByRole('button', { name: 'Menu +' }).click();
      await page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }).click();
      assert.equal(await page.getByRole('button', { name: 'Menu +' }).getAttribute('aria-expanded'), 'false');
    }
    await page.locator('.job summary').first().click();
    assert.equal(await page.locator('.job').first().getAttribute('open'), '');
    await page.locator('.job summary').first().press('Enter');
    assert.equal(await page.locator('.job').first().getAttribute('open'), null);
    await page.getByRole('button', { name: 'Copy email address' }).click();
    await page.getByRole('status').filter({ hasText: 'Email copied.' }).waitFor();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'pranavpradeeptp@gmail.com');
    const invalid = await page.locator('a[href^="#"]').evaluateAll(links => links.filter(link => !document.querySelector(link.getAttribute('href'))).map(link => link.getAttribute('href')));
    assert.deepEqual(invalid, []);
    if (width <= 760) await page.getByRole('button', { name: 'Menu +' }).click();
    await page.getByRole('navigation').getByRole('button', { name: 'Resume' }).click();
    await page.getByRole('heading', { name: 'Pranav T Pradeep.' }).waitFor();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'main');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.screenshot({ path: `artifacts/resume-${width}.png`, fullPage: true });
    await page.getByRole('button', { name: 'Back to services' }).click();
    await page.getByRole('heading', { level: 1 }).filter({ hasText: 'Behind every' }).waitFor();
    console.log(`PASS ${width}px: layout, navigation, keyboard accordion, contact, resume`);
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:5173/');
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  assert.equal(await page.evaluate(() => document.getAnimations().length), 0);
  await page.route('**/profile.png', async route => { await new Promise(resolve => setTimeout(resolve, 800)); await route.abort(); });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await page.locator('.skeleton').waitFor();
  await page.locator('.portrait.error').waitFor();
  await page.getByText('Portrait unavailable').waitFor();
  assert.equal(await page.locator('.portrait').getAttribute('aria-busy'), 'false');
  assert.deepEqual(errors, []);
  console.log('PASS reduced motion, real image loading/error states, no runtime errors');
} finally { await browser.close(); }
