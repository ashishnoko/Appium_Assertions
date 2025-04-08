const { expect, browser } = require('@wdio/globals')
const MyDemoApp =   require('../pageobjects/login.page')
const { remote } = require("webdriverio");




//before(async () => {
    //await driver.startRecordingScreen();

//});

describe('My Demo App Validation', () => {


   
    it('View the Products in the homepage', async () => {

        const element = await $('//android.widget.TextView[@text="Products"]')  // Locate element by selector
        await expect(element).toBeDisplayed()
        await browser.back();
    })

    it('assert product text', async () => {
        const text =  await MyDemoApp.product.getText()
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

        const cart = await MyDemoApp.cart_icon
        await expect(cart).toBeEnabled() 
       
    })

    it('cart button should be visible after action', async () => {

        const cart = await MyDemoApp.cart_icon
        await expect(cart).toBeVisible()  
    })

    it('check catalog text', async () => {
        await MyDemoApp.click_hamicon.click();
        const text = await MyDemoApp.catalog_text.getText();
        expect(text).toBe('Catalog');
    })


    it('assert hamburger button is clickable', async () => {

        const menuButton = await MyDemoApp.click_hamicon
        await expect(menuButton).toBeEnabled()
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

        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        const text = await MyDemoApp.login_btn.getText()
        expect(text).toBeEnabled()

    })


     
    it('assert login button',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        const text = await MyDemoApp.login_btn.getText()
        expect(text).toBeDisplayed()
            

    });

    
    it('check login with valid credentials',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('bob@example.com','10203040')
        const title = MyDemoApp.title
        expect(title).toBeDisplayed()
            

    });

    
   
    it('check login with emputy fields',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('','')
        const message = await MyDemoApp.error_message_1.getText()
        expect(message).toBe('Username is required')
            

    });

    it('check login with only username',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('bob@example.com','')
        const message = await MyDemoApp.error_message.getText()
        expect(message).toBe('Password is required')
            

    });

 

    it('check login with only password',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('','10203040')
        const message = await MyDemoApp.error_message_1.getText()
        expect(message).toBe('Username is required')
            

    });

    it('check login with invalid username',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('ashish','10203040')
        const message = await MyDemoApp.validation_message.getText()
        expect(message).toBe('Provided credentials do not match any user in this service.')
            

    });

    it('check login with invalid password',async () => {
    
        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('bob@example.com','12345')
        const message = await MyDemoApp.validation_message.getText()
        expect(message).toBe('Provided credentials do not match any user in this service.')
            

    });

    it('check the logout button',async () => {
    
        await MyDemoApp.menu()
        const logout_btn = await MyDemoApp.logout
        expect(logout_btn).toBeDisplayed()
       
    });

    it.only('check the logout button is clickable',async () => {
    
        await MyDemoApp.menu()
        const logout_btn = await MyDemoApp.logout
        expect(logout_btn).toBeEnabled()
       
    });









   
    


    //after(async () => {

        //const video = await driver.stopRecordingScreen();
    
        //const fs = require("fs");
        //fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    
        //await driver.deleteSession();
    
    //});
    


    







   



    
      
})

