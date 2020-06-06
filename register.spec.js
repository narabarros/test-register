describe('user register test', () => {
    it('should be able to register a new user', () => {
        browser.ignoreSynchronization = true
         
        browser.get(browser.baseUrl)
        browser.sleep(1000)

        element.all(by.className("link")).get(1).click()
        browser.sleep(1000)

        element(by.id("first_name")).click()
      
        element(by.id("first_name")).sendKeys("Nara")
        browser.sleep(1000)

        element(by.id("last_name")).click()

        element(by.id("last_name")).sendKeys("Barros")
        browser.sleep(1000)

        element(by.id("username")).click()

        element(by.id("username")).sendKeys("narabarroscruz@gmail.com")
        browser.sleep(1000)

        element(by.id("password")).click()

        element(by.id("password")).sendKeys("010615017")
        browser.sleep(1000) 
    })
    
})
    
