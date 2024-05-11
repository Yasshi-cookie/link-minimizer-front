// @ts-check
const { test, expect } = require('@playwright/test')

test('has title', async ({ page }, testInfo) => {
    await page.goto('/login')
    await expect(page).toHaveTitle('URLカンタン短縮')

    // メールアドレスとパスワードを入力
    await page.getByLabel('email').fill('sample@sample.com')
    await page.getByLabel('password').fill('password')
    await page.getByRole('button', { name: 'Login' }).click()

    // ページ遷移するまで待つ
    await page.waitForURL('/dashboard')
    // 遷移後のページのタイトルをチェック
    await expect(page).toHaveTitle('URLカンタン短縮 - Dashboard')

    // スクリーンショット機能のテスト（のちに削除予定）
    // await page.screenshot({
    //     fullPage: true,
    //     path: testInfo.snapshotPath('result.png'),
    // })

    // await page.getByRole('button', { name: 'Yasushi Teruya' }).click()

    // await expect(page).toHaveScreenshot('result.png', { fullPage: true })
})
