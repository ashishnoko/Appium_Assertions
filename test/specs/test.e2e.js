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

    it('check the payment by using valid credentials',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','2345 5678 4567 678','03/26','123')
        await MyDemoApp.review_order_btn.click()

        const text = await MyDemoApp.product_label.getText()
        expect(text).toBeVisible
        await browser.pause(5000)
      
    });


    it('view the payment section by entering emputy fullname in the card details ',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('','2345 5678 4567 678','03/26','123')
        await MyDemoApp.review_order_btn.click()
        const text = await MyDemoApp.validationvalue_name.getText()
        expect(text).toBe('Value looks invalid.')
    });

    it('view the payment section by entering emputy cardnumber in the card details ',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','','03/26','123')
        await MyDemoApp.review_order_btn.click()

        const text = await MyDemoApp.invalid_cardnumber.getText()
        expect(text).toBe('Value looks invalid.')

       
      
    });



    it('view the payment section by entering emputy security code in the card details ',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','2345 5678 4567 678','03/26','')
        await MyDemoApp.review_order_btn.click()
        const text  = await MyDemoApp.invalid_code.getText()
        //expect(text).toBeDisplayed
        expect(text).toBe('Value looks invalid.')

    
      
    });





    //completecheckoutprocess

    it('check the complete payment process',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','2345 5678 4567 678','03/45','123')
        await MyDemoApp.review_order_btn.click()
        await  MyDemoApp.place_order.click()
        const text = await MyDemoApp.checkout_complete.getText()
        expect(text).toBe('Your new swag is on its way')      
    });


    it('check the continue shopping button is clickable',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await MyDemoApp.checkout('John Rai','Portugal','Manchester','Kathmandu','Cornwall','44600','Nepal')
        await MyDemoApp.payment_method('John Rai','2345 5678 4567 678','03/45','123')
        await MyDemoApp.review_order_btn.click()
        await  MyDemoApp.place_order.click()
        const button =  await MyDemoApp.continue_shopping.click()
        expect(button).toBeEnabled()
        
    });

    //AssertAboutSection
    
    it('check the about section', async () => {
        await MyDemoApp.click_hamicon.click()
        MyDemoApp.abo_ut()
        const text = await MyDemoApp.about_section.getText()
        expect(text).toBeVisible
        
    
       
    });

    //AssertResetAppStateSection
    it('check the Reset App State section', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        const reset_app = await MyDemoApp.reset_app_state.click()
        const reset_app_btn = await MyDemoApp.reset_app.click()
        expect(reset_app_btn).toBeEnabled()
    
       
    })

    //AssertAllowLoginbutton
    it('check the finger print section', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        await MyDemoApp.finger_print.click()
        const f_print = await MyDemoApp.allow_login.click()
        expect(f_print).toBeEnabled()
    
       
    })

    //AssertAPIcalls

    it('check the api calls section', async () => {
        await MyDemoApp.click_hamicon.click()
        await MyDemoApp.api_calls.click()
        const app = await MyDemoApp.us_dc.click()
        expect(app).toBeEnabled()

    
       
    })

    //AssertSauceBotVideo

    it('check the sauce bot video', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        await MyDemoApp.sauce_bot_video.click()
    
       
    })
    it('ensure the pause btn is clickable ', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        await MyDemoApp.sauce_bot_video.click()
        const btn = await MyDemoApp.pause.click()
        except(btn).toBeEnabled()
    
       
    })
    it('ensure the play button is clickable', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        await MyDemoApp.sauce_bot_video.click()
        const btn_forward = await MyDemoApp.forward.click()
        expect(btn_forward).toBeEnabled()
        browser.pause(3000)
    })

    it('check the sauce bot video', async () => {
        const button =  await MyDemoApp.click_hamicon.click()
        await MyDemoApp.sauce_bot_video.click()
        const soundoff_btn = await MyDemoApp.soundoff.click()
        expect(soundoff_btn).toBeVisible
        
    
       
    })

    //scrolling

    it('check the scrolling options', async () => {
        //await MyDemoApp.sorting_options.click()

        async function scrolling(direction) {
            let scroll = direction;
            await browser.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        { type: "pointerMove", duration: 0, x: 228, y: 1545 }, 
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 500 },
                        { type: "pointerMove", duration: 1000, x: 0, y: -500 },  // Adjust scroll direction
                        { type: "pointerUp", button: 0 }
                    ]
                }
            ]);
            await browser.pause(5000);
        }
    
        

        await scrolling('down');
        
        
    
       
    })

    it.only('check the scrolling options', async () => {

        async function scrolling(direction) {
            await browser.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        { type: "pointerMove", duration: 0, x: 228, y: 1545 },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 500 },
                        { type: "pointerMove", duration: 1000, x: 0, y: -500 },  // Scroll up (swipe up to go down)
                        { type: "pointerUp", button: 0 }
                    ]
                }
            ]);
            await browser.pause(2000);
        }
    
        // Capture visible product before scroll
        const firstProduct = MyDemoApp.product // Adjust selector as per your app
        const isFirstDisplayed = await firstProduct.isDisplayed();
    
        await scrolling('down');
    
        // Check for a new product that should only be visible after scroll

        const newProduct = MyDemoApp.last_product // This should appear after scroll
        const isNewDisplayed = await newProduct.isDisplayed();
    
        expect(isFirstDisplayed).toBe(true); // Was visible before scroll
        expect(isNewDisplayed).toBe(true);   // Becomes visible after scroll
    
    });
    

    









    

































   
    


    //after(async () => {

        //const video = await driver.stopRecordingScreen();
    
        //const fs = require("fs");
        //fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    
        //await driver.deleteSession();
    
    //});
    


    







   



    
      
})

