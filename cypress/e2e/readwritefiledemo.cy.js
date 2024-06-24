/// <Reference types ="cypress"/>

before(function () {
    cy.fixture('example.json').as("test_data")
})

it("Read file using fixture", function () {
    cy.fixture("example.json").then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.body)
})

it('Read file using readfile()', function () {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('write file using writefile()', function () {
    cy.writeFile('sample.txt', "Hello i am harshith")
    cy.writeFile('sample.txt', " i am lesarch", { flag: 'a+' })


})


