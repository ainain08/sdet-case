describe('UiAutomator', () => {
    it('Loacator', async() => {
       


        await $('//*[@text="Afghanistan"]').click()
        await driver.pause(3000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("India"))').click()
        await $('//*[@text="Enter name here"]').addValue('ainan')
        await $('//*[@text="Male"]').click()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button').click()
        await driver.pause(3000);
        
        await $('//*[@text="ADD TO CART"][@index="1"]').click()
       // await $('//*[@text="ADD TO CART"][@index="2"]').click()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout').click()
        await $('android.widget.CheckBox').click()
        await $('//*[@text="Visit to the website to complete purchase"]').click()
        await driver.pause(7000)
      
        //await driver.getContexts()
       await driver.switchContext('WEBVIEW_com.androidsample.generalstore')
//await $('//*[@name="q"]').addValue('ainan')
await driver.pause(10000)

        //await $('android=new UiSelector().textContains("Alert")').click()
    });
});
