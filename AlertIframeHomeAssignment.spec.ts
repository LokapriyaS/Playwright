import {test,expect} from "@playwright/test";
test("Validate alerts and iframe",async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");
    const framereference = page.frameLocator("#iframeResult");
    
    
    page.on("dialog",async(dialog)=>{
        expect (dialog.type()=="prompt");
        await dialog.accept("Lokapriya");

            

        
    });

    await framereference.getByRole("button",{name:"Try it"}).click();
    await expect(framereference.locator("#demo")).toHaveText("Hello Lokapriya! How are you today?");

    await page.waitForTimeout(6000);
});

test("Validate prompt dismiss", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");
    const frameref= page.frameLocator("#iframeResult");
    page.on("dialog",async(dialog)=>{
        dialog.dismiss();
    })
    frameref.getByRole("button",{name:"Try it"}).click();
    expect (frameref.locator("#demo")).toHaveText("User cancelled the prompt.")
    await page.waitForTimeout(6000);

})