const { expect, browser } = require('@wdio/globals')
const MyDemoApp =   require('../pageobjects/login.page')
const { remote } = require("webdriverio");




//before(async () => {
    //await driver.startRecordingScreen();

//});

describe('My Demo App Validation', () => {


   
    it('View the Products in the homepage', async () => {

        const element =  MyDemoApp.product
        expect(element).toBeDisplayed()
        
    })

    it('assert product text', async () => {
        const text =  await MyDemoApp.product.getText()
        expect(text).toBe('Products')
    })

   
    it('sorting options should be clickable', async () => {
        const button =  MyDemoApp.sorting_options
        expect(button).toBeEnabled()  
    })

    it('sorting options should be visible after action', async () => {
        const element =  await MyDemoApp.sorting_options
        await element.click()  
        await expect(element).toBeVisible()
    })



    it('Hamburger button should be clickable', async () => {
        const button =  MyDemoApp.click_hamicon
        await expect(button).toBeEnabled()  
    })
    
    it('Cart button should be clickable', async () => {

        const cart = MyDemoApp.cart_icon
        await expect(cart).toBeEnabled() 
       
    })

    it('cart button should be visible after action', async () => {

        const cart =  MyDemoApp.cart_icon
        await expect(cart).toBeVisible()  
    })

    it('check catalog text', async () => {
        await MyDemoApp.click_hamicon.click();
        const text = await MyDemoApp.catalog_text.getText();
        expect(text).toBe('Catalog');
    })


    it('assert hamburger button is clickable', async () => {

        const menuButton = MyDemoApp.click_hamicon
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
        const btn =  MyDemoApp.web_view
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

    //addingtothecart

    it('check the products title',async () => {
    
        await MyDemoApp.product.click()
        const text = await MyDemoApp.product_title.getText()

        expect(text).toBe('Sauce Labs Backpack')
      
 
    });

    it('check the Add To Cart button ',async () => {
    
        await MyDemoApp.product.click()
        const text = await  MyDemoApp.addtocart.getText()

        expect(text).toBe('Add To Cart')
    });

    
    it('check the product image',async () => {
    
        await MyDemoApp.product.click()
        const image =  MyDemoApp.product_image

        expect(image).toBeDisplayed()
    });

  

    
    it('check the product price',async () => {
    
        await MyDemoApp.product.click()
        const text =  MyDemoApp.product_price


        expect(text).toBeDisplayed()
    });

    it('check the product price',async () => {
    
        await MyDemoApp.product.click()
        const text =  MyDemoApp.product_price


        expect(text).toBeDisplayed()
    });

    //Cart Section

    it('check the Remove Item is clickable ',async () => {

        await MyDemoApp.product.click()
        MyDemoApp.addtocart
        browser.pause(2000)
        await MyDemoApp.cart_icon.click()
        browser.pause(2000)

        const click = MyDemoApp.remove_item
        expect(click).toBeEnabled()
    });

    
    it('check the Proceed to Checkout button is clickable ',async () => {

        await MyDemoApp.product.click()
        MyDemoApp.addtocart
        await MyDemoApp.cart_icon.click()
        const click = MyDemoApp.proceed_to_checkout
        expect(click).toBeEnabled()
    });

    //checkout process

    it('check the title in checkout is visible',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        const text = MyDemoApp.checkout_title.getText()
        expect(text).toBeDisplayed()

    });


    //shippingAddress

    it('check the entered shipping is valid ',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('Bruno Fernandes','Portugal','Manchester','Kathmandu','Cornwall','444600','Nepal')
        const payment_method = MyDemoApp.payment_text.getText()
        expect(payment_method).toBeVisible
    });

    it('check the fullname of the shipping address',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('','Portugal','Manchester','Kathmandu','Cornwall','444600','Nepal')
        const validation_message =  await MyDemoApp.invalid_fullname.getText()
        expect(validation_message).toBe('Please provide your full name.')
        await browser.pause(5000)
      
    });

    it('check the zipcode',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('Ashish','Portugal','Manchester','Kathmandu','Cornwall','','Nepal')
        const number =  await MyDemoApp.zip_code_validation.getText()
        expect(number).toBe('Please provide your zip code.')
        await browser.pause(5000)
      
    });

    //paymentcard

    it.only('check the payment by using valid credentials',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','2345 5678 4567 678','03/45','123')
        await MyDemoApp.review_order_btn.click()

        const text = await MyDemoApp.product_label.getText()
        expect(text).toBeVisible


       
        
        await browser.pause(5000)
      
    });






























   
    


    //after(async () => {

        //const video = await driver.stopRecordingScreen();
    
        //const fs = require("fs");
        //fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    
        //await driver.deleteSession();
    
    //});
    


    







   



    
      
})

