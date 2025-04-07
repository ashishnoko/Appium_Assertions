const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')


const { remote } = require("webdriverio");




before(async () => {
    await driver.startRecordingScreen();

});




describe('My Demo App Validation', () => {


   
    it('see the product in the homepage', async () => {
        const element = await $('//android.widget.TextView[@text="Products"]')  // Locate element by selector
     
        await expect(element).toBeDisplayed()
        await browser.back();
    })



    it(' assert element text ', async () => {
        const element = await $('//android.widget.TextView[@text="Products"]')
        
       
        const text = await element.getText()
        expect(text).toBe('Products')
    })

   
    it('sorting options should be clickable', async () => {
        const button = await $('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView')
        await expect(button).toBeEnabled()  
    })

    it('sorting options should be visible after action', async () => {
        const element = await $('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView')
        await element.click()  
        await expect(element).toBeVisible()
    })



    it('Hamburger button should be clickable', async () => {
        const button = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        await expect(button).toBeEnabled()  
    })
    
    it('Cart button should be clickable', async () => {
        const button = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        await expect(button).toBeEnabled() 
    })

    it('cart button should be visible after action', async () => {
        const element = await $('~elementSelector')
        await element.click()  // Perform action
        await expect(element).toBeVisible()  // Assert it's visible
    })

    it('check catalog text', async () => {
        const button = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        await button.click()
        const element = await $('~menu item catalog')
        const text = await element.getText()
        expect(text).toBe('Catalog')

       
    })


    it('assert hamburger button is clickable', async () => {
        const menuButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        
        await expect(menuButton).toBeEnabled()
        await menuButton.click()
    
       
    })

    it('assert login text', async () => {
        const hamButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
        const menuButton = await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()
        const loginElement = await $('//android.widget.TextView[contains(@text, "Login")]');


        const text = await loginElement.getText()
        console.log(text)
        expect(text).toBe('Logins')

    })

    it('assert login', async () => {
        const hamButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
        const menuButton = await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()
        const loginElement = await $('//android.widget.TextView[contains(@text, "Login")]');

        expect(loginElement).toBeEnabled()

    })

    it('assert login button', async () => {

        const hamButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
        const menuButton = await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()
        const loginElement = await $('//android.widget.TextView[contains(@text, "Login")]').click()
        const element = await $('(//android.widget.TextView[@text="Login"])[2]')
        const text = await element.getText()
        expect(text).toBe('Login')
    })



    it('check login with valid credentials', async () => {
        const hamButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
        const menuButton = await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()
        const loginElement = await $('//android.widget.TextView[contains(@text, "Login")]');

        const user_name = await $('~Username input field');
        await user_name.setValue('bob@example.com'); 
        const password = await $('~Password input field');
        await password.setValue('10203040'); 
        browser.pause(3000);
        const login = await $('(//android.widget.TextView[@text="Login"])[2]').click()
        browser.pause(3000);
        const title =  await $('//android.widget.TextView[@text="Products"]')


        expect(title).toBeDisplayed()
    })

    
    it.only('check login with epmuty credentials', async () => {
        const hamButton = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
        const menuButton = await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()
        const loginElement = await $('//android.widget.TextView[contains(@text, "Login")]');

        const user_name = await $('~Username input field');
        await user_name.setValue(''); 
        browser.pause(3000);
        const password = await $('~Password input field');
        await password.setValue(''); 
        browser.pause(3000);
        const login = await $('(//android.widget.TextView[@text="Login"])[2]').click()
        browser.pause(3000);
        const error_message = await $('//android.widget.TextView[@text="Username is required"]').getText()

        
        
        expect(error_message).toBe('Username is required')
    })





   
    


    after(async () => {

        const video = await driver.stopRecordingScreen();
    
        const fs = require("fs");
        fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    
        await driver.deleteSession();
    
    });
    


    







   



    
      
})

