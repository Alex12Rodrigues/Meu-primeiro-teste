import { test, expect } from '@playwright/test';

test.describe('Teste de Login - SauceDemo', () => {

  test('Login com usuário válido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.pause(); // 👈 Pausa para visualizar e debugar

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login com usuário bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.pause(); // 👈 Pausa para visualizar e debugar

    await page.fill('[data-test="username"]', 'locked_out_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    await page.click('[data-test="login-button"]');

    const erro = page.locator('[data-test="error"]');
    await expect(erro).toBeVisible();
  });

  test('Login com senha errada', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.pause(); // 👈 Pausa para visualizar e debugar

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'senha_errada');

    await page.click('[data-test="login-button"]');

    const erro = page.locator('[data-test="error"]');
    await expect(erro).toBeVisible();
  });

});
