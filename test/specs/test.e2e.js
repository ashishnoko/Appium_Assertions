const { expect, browser } = require('@wdio/globals')
const MyDemoApp =   require('../pageobjects/login.page')
const { remote } = require("webdriverio");




//before(async () => {
    //await driver.startRecordingScreen();

//});

describe('My Demo App Validation', () => {


   
    it('View the Products in the homepage', async () => {

        const element = await MyDemoApp.product
        await expect(element).toBeDisplayed()
        
    })

    it('assert product text', async () => {
        const text =  await MyDemoApp.product.getText()
        expect(text).toBe('Products')
    })

   
    it('sorting options should be clickable', async () => {
        const button = await MyDemoApp.sorting_options
        expect(button).toBeEnabled()  
    })

    it('sorting options should be visible after action', async () => {
        const element =  await MyDemoApp.sorting_options
        await element.click()  
        await expect(element).toBeVisible()
    })



    it.only('Hamburger button should be clickable', async () => {
        const button = await MyDemoApp.click_hamicon
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

    it('check the logout button is clickable',async () => {
    
        await MyDemoApp.menu()
        const logout_btn = await MyDemoApp.logout
        expect(logout_btn).toBeEnabled()
       
    });

    it('check the text of the logout button',async () => {
    
        await MyDemoApp.menu()
    
        const text = await MyDemoApp.logout.getText()
        expect(text).toBe('Log Out')
       
    });

    //Assert Webview

    it('check it is clickable',async () => {
    
        await MyDemoApp.menu()
        const btn = await MyDemoApp.web_view
        expect(btn).toBeEnabled()

       
    });

    it('check the Go To Site button',async () => {
    
        await MyDemoApp.menu()
        const btn = await MyDemoApp.webview.click()
        const gotosite_btn = await MyDemoApp.gotosite_btn 
     
        expect(gotosite_btn).toBeDisplayed()

       
    });

    it('check the entered url emputy is not',async () => {
    
        await MyDemoApp.web_view()
        const text = await MyDemoApp.error_url_field.getText()
 
        expect(text).toBe('Please provide a correct https url.')
    });

    it('check the valid url in the webview',async () => {
    
        await MyDemoApp.web_view_valid()
       
 
        //expect(text).toBe('Please provide a correct https url.')
    });

    it('check the qr scanner is clickable',async () => {
    
        const display = await MyDemoApp.qr_scanner
        expect(display).toBeEnabled()
       
 
        //expect(text).toBe('Please provide a correct https url.')
    });

    it('check the qr scanner is clickable',async () => {
    
        const display = await MyDemoApp.qrscanner()
        expect(display).toBeEnabled()
       
 
    });

    it('check the title',async () => {
    
        await MyDemoApp.qrscanner()
        const text = await MyDemoApp.qr_scanner_text.getText()
        expect(text).toBe('QR Code Scanner')
       
 
    });

















   
    


    //after(async () => {

        //const video = await driver.stopRecordingScreen();
    
        //const fs = require("fs");
        //fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    
        //await driver.deleteSession();
    
    //});
    


    







   



    
      
})

