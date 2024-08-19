describe('Pruebas realizadas a Base de datos', () =>{

    it ('Select', () =>{

        cy.task ('queryDb', 'SELECT * FROM PRUEBAS').then ( results =>{
            cy.log (results)
        })
    })

    it('Insert', () =>{

        cy.task ('queryDb', 'INSERT INTO pruebas (nombre, apellidoMaterno, apellidoPaterno) VALUES ("Javier", "Fuentes","Mora")').then (results =>{
            cy.log (results)
            expect(results.affectedRows).to.equal(1)
            cy.wrap(results.intertId).as('id')
        })
    })

    it ('Select para corroborar que este lo de la prueba anterior', () =>{

        cy.task ('queryDb', `SELECT * FROM PRUEBAS WHERE id= ${this.id}`).then ( results =>{
            cy.log (results)
            expect(results[0].nombre).to.eq('Javier')
            expect(results[0].apellidoMaterno).to.eq('Fuentes')
            expect(results[0].apellidoPaterno).to.eq('Mora')
        })
    })

    it ('DELTE lo de la prueba anterior', () =>{

        cy.task ('queryDb', `DELETE * FROM PRUEBAS WHERE id= ${this.id}`).then ( results =>{
            cy.log (results)
            expect(results.affectedRows).to.equal(1)})
    })


})

    



