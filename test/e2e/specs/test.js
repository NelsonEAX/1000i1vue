// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'e2e tests /': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL;

        browser
            .url(devServer)
            //Проверям наличие нужных элементов на странице
            .waitForElementVisible('.main-header', 5000)
            .assert.elementPresent('a[href="/register"]')
            .assert.elementPresent('a[href="/login"]')
            .end()
    },
    'e2e tests /login': function (browser) {
        const devServer = browser.globals.devServerURL;
        const test_email = 'email@test.ru';
        const test_password = '1234abcd';

        browser
            .url(devServer+'/login')

            //Проверям наличие нужных элементов на странице
            .waitForElementVisible('.login-page', 5000)
            .assert.elementPresent('.login-box-msg')
            .assert.containsText('p', 'Войдите для продолжения работы')
            .assert.containsText('a[href="/passrecover"]', 'Восстановить пароль')
            .assert.containsText('a[href="/register"]', 'Регитсрация')
            .assert.elementCount('input', 2)
            .assert.attributeEquals('button[type="submit"]', "disabled", "true")

            //Входим под тестовыми данными
            .setValue('input[name="email"]', test_email)
            .setValue('input[name="password"]', test_password)
            .pause(500)
            .click('button[type="submit"]')
            .waitForElementVisible('#dashbord', 5000)
            .assert.urlContains('dash')
            .click('li.dropdown.user.user-menu')
            .waitForElementVisible('li.dropdown.user.user-menu.open', 5000)
            .click('#logout')
            .waitForElementVisible('.login-page', 5000)
            .assert.urlContains('login')

            //Входим под фейковыми данными
            .setValue('input[name="email"]', 'abc'+test_email)
            .setValue('input[name="password"]', 'abc'+test_password)
            .pause(500)
            .click('button[type="submit"]')
            .waitForElementVisible('#error_message', 5000)

            .end()
    },
    'e2e tests /register': function (browser) {
        const devServer = browser.globals.devServerURL;
        const test_email = 'email@test.ru';
        const test_password = '1234abcd';

        browser
            .url(devServer+'/register')

            //Проверям наличие нужных элементов на странице
            .waitForElementVisible('.register-box-body', 5000)
            .assert.elementPresent('.register-box-msg')
            .assert.containsText('p', 'Регистрация нового пользователя')
            .assert.containsText('a[href="/passrecover"]', 'Восстановить пароль')
            .assert.containsText('a[href="/login"]', 'Войти')
            .assert.elementCount('input', 3)
            .assert.attributeEquals('button[type="submit"]', "disabled", "true")

            //Регистрируем под новыми данными
            .url('http://1000i1api:88/api/test/clear')
            .url(devServer+'/register')
            .setValue('input[name="email"]', test_email)
            .setValue('input[name="password"]', test_password)
            .setValue('input[name="confirm"]', test_password)
            .pause(500)
            .click('button[type="submit"]')
            .waitForElementVisible('#dashbord', 10000)
            .assert.urlContains('dash')
            .click('li.dropdown.user.user-menu')
            .waitForElementVisible('li.dropdown.user.user-menu.open', 5000)
            .click('#logout')
            .waitForElementVisible('.login-page', 5000)
            .assert.urlContains('login')

            //Регистрируем под существующими данными
            .url(devServer+'/register')
            .setValue('input[name="email"]', test_email)
            .setValue('input[name="password"]', test_password)
            .setValue('input[name="confirm"]', test_password)
            .pause(500)
            .click('button[type="submit"]')
            .waitForElementVisible('#result_message', 5000)

            .end()
    }
}
