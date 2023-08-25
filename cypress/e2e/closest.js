/// <reference types="cypress" />



describe('practicing eq method', () => {

    it('practice contain method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()


        cy.get('[href="/web/index.php/leave/viewLeaveModule"]').closest('ul').should('have.class', 'oxd-main-menu')




    });

});

