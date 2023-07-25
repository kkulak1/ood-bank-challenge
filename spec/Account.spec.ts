import { Account } from "../src/Account"

describe("Account tests", () => {
    let account: Account;

    beforeEach(() => {
        account = new Account("12345")
    })

    it("should create account", () => {
        expect(account.accountNum).toEqual("12345")
        expect(account.transactions.length).toEqual(0)
    })

})