/// <reference types="cypress" />

describe('Home page tests', () => {

  it('Verify loading image', () => {

    cy
      .visit('https://butopea.com')
      .get('a[href*="/kanapek"]').eq(2)
      .find('img')
      .should('be.visible')
      .and((img) => {
        // if the image loads then the naturalWidth and naturalHeight are set
        expect(img[0].naturalWidth).to.be.greaterThan(0)
      })
      .should('have.attr', 'src')
      //to extract the src URL of the image and display it in the logs
      .then((src) => {
        cy
          .log('https://butopea.com' + src)
      })
  })

  it('verify loading text and button', () => {

    cy
      .visit('https://butopea.com')
      .get('a[href*="/lakastextilek"]')
      .find('button')
      //verify if the button exists and visible on the webpage
      .should('be.visible')
      //to extract the button label, verify it is not empty, and display it in the logs
      .then((button) => {
        const text = button.text()
        expect(text).not.to.equal('')
        cy
          .log(text)
      })

      .get('a[href*="/lakastextilek"]')
      .find('p')
      //verify if the text exists and visible on the webpage
      .should('be.visible')
      //to extract the text, verify it is not empty, and display it in the logs
      .then((p) => {
        const text = p.text()
        expect(text).not.to.equal('')
        cy
          .log(text)
      })
  })

  it('verify loading products', () => {
    cy
      .visit('https://butopea.com')
      .contains('Új termékek')
      .click()
      //to give enough time for the DOM elements, that we need to select, to load 
      .wait(3000)
      .get('div[class*="product-listing"]')
      .children()
      //verify that there are products loaded on the page
      .should((products) => {
        expect(products.length).to.be.greaterThan(0)
      })
      //extracts the details of each product and display it in the logs
      .each(val => {

        cy
          .log('product_title: ' + val.find('p').text())

          .log('price: ' + val.find('div').eq(7).text())

          .wrap(val).find('a').invoke('attr', 'href').then(href => {
            cy
              .log('product_link: https://butopea.com' + href)
          })

          .wrap(val).find('img').eq(1).invoke('attr', 'src').then(src => {
            cy
              .log('image_link: https://butopea.com' + src)
          })
      })

  })

})

